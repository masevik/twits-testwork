import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <NavLink to="/tweets">To Tweets</NavLink>
    </>
  );
};

export default Home;
