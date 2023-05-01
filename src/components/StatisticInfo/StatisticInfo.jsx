import { Box } from 'components/Box';
import { Followers, Tweets } from './StatisticInfo.styled';

export const StatisticInfo = ({ data }) => {
  const { tweets, followers } = data;
  const tweetsCount = new Intl.NumberFormat('en').format(tweets);
  const followersCount = new Intl.NumberFormat('en').format(followers);

  return (
    <Box ml="auto" mr="auto" textAlign="center">
      <Tweets>{tweetsCount} tweets</Tweets>
      <Followers>{followersCount} followers</Followers>
    </Box>
  );
};
