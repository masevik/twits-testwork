import { Container } from 'components/Container/Container';
import { UserList } from 'components/UserList/UserList';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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

  return (
    <Container>
      <UserList users={users} />
      <div>
        <NavLink to="/">Home</NavLink>
        <button>Load more</button>
      </div>
    </Container>
  );
};

export default Tweets;
