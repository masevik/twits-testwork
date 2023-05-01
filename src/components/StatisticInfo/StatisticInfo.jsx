import { Box } from 'components/Box';
import { Followers, Tweets } from './StatisticInfo.styled';

export const StatisticInfo = () => {
  const tweetsCount = new Intl.NumberFormat('en').format(777);
  const followersCount = new Intl.NumberFormat('en').format(100500);

  return (
    <Box ml="auto" mr="auto" textAlign="center">
      <Tweets>{tweetsCount} tweets</Tweets>
      <Followers>{followersCount} followers</Followers>
    </Box>
  );
};
