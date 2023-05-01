import { Box } from 'components/Box';
import { Button } from 'components/Button/Button';
import { Container } from 'components/Container/Container';
import { Link } from 'components/Link/Link';
import { UserList } from 'components/UserList/UserList';
import { useEffect, useState } from 'react';
import { fetchTotalUser, fetchUsers } from 'services/API';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const newUsers = await fetchUsers(page);
        const totalUser = await fetchTotalUser();
        setTotal(totalUser);
        setUsers(prevState => [...prevState, ...newUsers]);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUsers();
  }, [page]);

  const pageCount = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column">
        <UserList users={users} />
        <Box display="flex" mb="32px" max-width="450px" ml="auto" mr="auto">
          <Link to="/">Home</Link>
          {users.length > 0 && page < total / 3 && (
            <Button onClick={pageCount}>Load more</Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Tweets;
