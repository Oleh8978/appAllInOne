import getAccessToken from './cognito/getAccessToken';
import { SERVER_URL } from '../constants/constants';

export default async (coin, type, amount) => {
  try {
    const res = await fetch(
      `https://${SERVER_URL}/api?command=secureAsset&coin=${coin}&type=${type}&amount=${amount}`,
      {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    );
    console.log('getSecurityAsset');
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return await res.json();
  } catch (e) {
    throw new Error(e);
  }
};
