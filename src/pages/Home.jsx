import { Box } from 'components/Box';
import { Container } from 'components/Container/Container';
import { Link } from 'components/Link/Link';

const Home = () => {
  return (
    <Box
      background="linear-gradient(#568888 -10%, #4682b4 110%)"
      backgroundRepeat
    >
      <Container>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          pt="35vh"
          as="main"
          height="100vh"
        >
          <h1 style={{ marginBottom: 26 }}>
            Subscribe to something interesting
          </h1>
          <h2 style={{ marginBottom: 26 }}>Press the button</h2>
          <Link to="/tweets">To Tweets</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
