import axios from 'axios';

export const login = async ({ email, password }) => {
  const data = { email,password };
  const result = await axios.post('/auth/login',  data);
  return result;

}
