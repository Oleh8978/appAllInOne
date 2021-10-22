import { Auth } from 'aws-amplify';

  export default async () => await Auth.currentSession()
    .then((session) => {
      const refreshToken = session.getRefreshToken();
        Auth.currentAuthenticatedUser()
          .then((res) => {
            res.refreshSession(refreshToken, (err, data) => {
              console.log('data @@@@', data);
              console.log('err ####', err);
              if (err) {
                Auth.signOut();
              } else {
                console.log('data.getIdToken().getJwtToken() ', data.getIdToken().getJwtToken());
              }
            });
          });
    })
    .catch((e) => {
      throw e;
    });
