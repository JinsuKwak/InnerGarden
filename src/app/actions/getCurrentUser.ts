import axios from 'axios';
import getToken from '@/app/util/getToken';
import removeToken from '@/app/util/removeToken';
import { User } from '@/types/User';

const INNERGARDEN_API = process.env.NEXT_PUBLIC_INNERGARDEN_API;

export const getCurrentUser = async (): Promise<User | null> => {
  const token = getToken();
  if (!token) {
    return null;
  }

  try {
    const response = await axios.post(`${INNERGARDEN_API}/validate-token`, {
      token: token,
    });
    return response.data as User; // Return the user data
  } catch (error) {
    console.error('Failed to validate token:', error);
    removeToken(); // Remove invalid token
    return null;
  }
};

export default getCurrentUser;
