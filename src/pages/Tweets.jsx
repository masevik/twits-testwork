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

  const handleClick = (status, name) => {
    if (status === true) {
      users.forEach(user => {
        if (user.name === name) {
          user.followers += 1;
        }
      });
    } else
      users.forEach(user => {
        if (user.name === name) {
          user.followers -= 1;
        }
      });
  };

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
      <Box display="flex" flexDirection="column" as="main">
        <UserList users={users} onClick={handleClick} />
        <Box
          display="flex"
          max-width="392px"
          ml="auto"
          mr="auto"
          gridColumnGap="16px"
          pb="26px"
        >
          <Link to="/">Back</Link>
          {users.length > 0 && page < total / 3 && (
            <Button onClick={pageCount}>Load more</Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Tweets;
