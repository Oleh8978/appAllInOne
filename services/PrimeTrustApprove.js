import getAccessToken from './cognito/getAccessToken';
import sessionRefresher from './awsRefreshSession';

import { SERVER_URL } from '../constants/constants';
// It`s for testnet only!!!

export default async () => {
  try {
    const res = await fetch(
      `https://${SERVER_URL}/api?command=debugSandbox`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'kyc-document-checks': {
            all: 'verify',
          },
          'cip-checks': {
            all: 'approve',
          },
        }),
      },
    );
    console.log('debugSandbox');
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
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
