import { Twit } from '../components/Twit/Twit';
import { useEffect, useState } from 'react';
import { fetchUsers } from 'services/API';

const Tweets = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers();
        setUsers(users);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUsers();
  }, []);

  console.log(users);

  return (
    <div>
      <Twit />
    </div>
  );
};

export default Tweets;
