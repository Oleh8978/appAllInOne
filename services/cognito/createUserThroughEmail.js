import { Auth } from 'aws-amplify';

export default async ({ email, password }) => {
  try {
    return await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        given_name: 'given_name',
        family_name: 'family_name',
      },
    });
  } catch (e) {
    throw new Error(e.message);
  }
};
