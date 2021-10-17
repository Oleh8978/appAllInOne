import getAccessToken from './cognito/getAccessToken';
import { SERVER_URL } from '../constants/constants';

export default async (paymentId) => {
  try {
    const res = await fetch(
      `https://${SERVER_URL}/api?command=payout&totp=123456&plaidAccountId=&plaidPublicToken&paymentId=${paymentId}`,
      {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    );
    console.log('payOut');
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
};
