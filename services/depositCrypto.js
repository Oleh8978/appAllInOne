import getAccessToken from './cognito/getAccessToken';
import sessionRefresher from './awsRefreshSession';

import { SERVER_URL } from '../constants/constants';

// TODO: this function is for debugging!
export default async (coin = 'BTC') => {
  try {
    const res = await fetch(
      `https://${SERVER_URL}/api?command=debugSandbox`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken()}` },
        body: JSON.stringify({
          'account-asset-fund': {
            coin,
            'unit-count': '0.111',
          },
        }),
      },
    );
    console.log('depositCrypto');
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
