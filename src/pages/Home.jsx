import { Container } from 'components/Container/Container';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <NavLink to="/tweets">To Tweets</NavLink>
    </Container>
  );
};

export default Home;
