import getAccessToken from './cognito/getAccessToken';
import sessionRefresher from './awsRefreshSession';

import { SERVER_URL } from '../constants/constants';

export default async (securityId, amount, loanDuration) => {
  try {
    const res = await fetch(
      `https://${SERVER_URL}/api?command=borrow&totp=123456&securityId=${securityId}&amount=${amount}&preset=loan1&duration=${loanDuration}`,
      {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    );
    console.log('borrowLoan');
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return await res.json();
  } catch (e) {
    if (e === '[Error: ERROR[Auth]: token address mismatch]') {
      try {
        await sessionRefresher();
      } catch (e) {
        throw new Error(e.message);
      }
    }

    throw new Error(e);
  }
};
