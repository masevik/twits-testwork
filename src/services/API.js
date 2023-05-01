import axios from 'axios';

axios.defaults.baseURL = 'https://63d22e5e06556a0fdd368b3b.mockapi.io/';

export async function fetchUsers() {
  const { data: users } = await axios.get('users');
  return users;
}
