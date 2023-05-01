import axios from 'axios';

axios.defaults.baseURL = 'https://63d22e5e06556a0fdd368b3b.mockapi.io/';

export async function fetchUsers(page) {
  const { data: users } = await axios.get('users', {
    params: {
      page,
      limit: 3,
    },
  });
  return users;
}

export async function fetchTotalUser() {
  const { data } = await axios.get('users');
  return data.length;
}
