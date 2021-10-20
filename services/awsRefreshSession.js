import { Auth } from 'aws-amplify';

  export default async () => {
    return await  Auth.currentSession()
    .then((session) => {
      const refreshToken = session.getRefreshToken();
        Auth.currentAuthenticatedUser()
          .then((res) => {
            res.refreshSession(refreshToken, (err, data) => {
              console.log('data @@@@', data)
              console.log('err ####', err)
              if (err) {
                Auth.signOut()
              } else {
                console.log('data.getIdToken().getJwtToken() ', data.getIdToken().getJwtToken())
              }
            });
          });

    })
    .catch((e) => {
      throw e
    });

    // console.log('innn refresher ')

    // try {
    //   const session = await Auth.currentSession();

    //   try {
    //     const refreshToken = await session.getRefreshToken();
    //     console.log('refreshToken ', refreshToken)

    //   } catch (e) {
    //     throw e
    //   }

    // } catch (e) {
    //   throw e
    // }

      
      // .then((session) => {
      //   var refreshToken = session.getRefreshToken();
      //   if (refresh === true) {
      //     Auth.currentAuthenticatedUser()
      //       .then((res) => {
      //         res.refreshSession(refreshToken, (err, data) => {
      //           if (err) {
      //             Auth.signOut()
      //           } else {
      //             console.log('data.getIdToken().getJwtToken(); ', data.getIdToken().getJwtToken())
      //             config.headers.Authorization = "Bearer " + data.getIdToken().getJwtToken();
      //           }
      //         });
      //       });
      //   } else {
      //     config.headers.Authorization = "Bearer " + session.getIdToken().getJwtToken();
      //   }
      // })
      // .catch((e) => {
      //   throw e
      // });
  };