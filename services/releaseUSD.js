import getAccessToken from './cognito/getAccessToken';
import sessionRefresher from './awsRefreshSession';

import { SERVER_URL } from '../constants/constants';

export default async (plaidAccountId, plaidPublicToken, amount) => {
  try {
    const res = await fetch(
      `https://${SERVER_URL}/api?command=payout&reference=Rhino&plaid_account_id=${plaidAccountId}&plaid_public_token=${plaidPublicToken}&amount=${amount}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    );
    console.log('releaseUSD');
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
