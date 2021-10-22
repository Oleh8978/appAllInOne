import { Auth } from 'aws-amplify';

import getAccessToken from './cognito/getAccessToken';
import sessionRefresher from './awsRefreshSession';

import { SERVER_URL } from '../constants/constants';

export default async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const res = await fetch(
      `https://${SERVER_URL}/api?command=register&email=${user.attributes.email}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken()}` },
      },
    );
    console.log('register');
    if (!res.ok) {
      throw new Error(await res.text());
    }
  } catch (e) {
    if (String(e.message).trim() === 'ERROR[Auth]: token address mismatch') {
      try {
        await sessionRefresher();
      } catch (e) {
        throw new Error(e.message);
      }
    }

    throw new Error(e);
  }
};
