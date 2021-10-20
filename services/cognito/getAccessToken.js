import { Auth } from 'aws-amplify';

// export default async () => (await Auth.currentAuthenticatedUser()).signInUserSession?.accessToken
//   ?.jwtToken;


  export default async () => {
    try {
      const res = await Auth.currentAuthenticatedUser()
      return await res.signInUserSession?.accessToken?.jwtToken
    } catch (e) {
      throw new Error(e);
    }
  };