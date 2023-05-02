import Home from 'pages/Home';
import Tweets from 'pages/Tweets';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tweets" element={<Tweets />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
