import getAccessToken from './cognito/getAccessToken';
import { SERVER_URL } from '../constants/constants';

export default async (securityId, amount) => {
  try {
    const res = await fetch(
      `https://${SERVER_URL}/api?command=borrow&totp=123456&securityId=${securityId}&amount=${amount}&preset=creditLine`,
      {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    );
    console.log('borrowCreditLine');
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
};
