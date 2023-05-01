import { Box } from 'components/Box';
import { Container } from 'components/Container/Container';
import { Link } from 'components/Link/Link';

const Home = () => {
  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        pt="25vw"
        as="main"
      >
        <h1 style={{ marginBottom: 26 }}>Subscribe to something interesting</h1>
        <h2 style={{ marginBottom: 26 }}>Press the button</h2>
        <Link to="/tweets">To Tweets</Link>
      </Box>
    </Container>
  );
};

export default Home;
