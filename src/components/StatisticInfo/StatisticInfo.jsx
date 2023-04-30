import { Box } from 'components/Box';
import { Followers, Tweets } from './StatisticInfo.styled';

export const StatisticInfo = () => {
  return (
    <Box ml="auto" mr="auto" textAlign="center">
      <Tweets>777 tweets</Tweets>
      <Followers>100500 followers</Followers>
    </Box>
  );
};
