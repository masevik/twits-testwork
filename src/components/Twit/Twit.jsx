import { Box } from 'components/Box';
import { Hero } from 'components/Hero/Hero';
import { LogoComponent } from 'components/Logo/Logo';
import { AvatarBg, AvatarCover, Delimiter } from './Twit.styled';
import { UserAvatar } from 'components/UserAvatar/UserAvatar';
import { StatisticInfo } from 'components/StatisticInfo/StatisticInfo';
import { Button } from 'components/Button/Button';
import { useState } from 'react';

export const Twit = ({ user, onClick }) => {
  const [status, setStatus] = useState(false);
  const { name, tweets, followers, avatar } = user;

  const color = !status ? '#ebd8ff' : '#5cd3a8';

  const follow = () => {
    setStatus(prevState => !prevState);
    onClick(!status, name);
  };

  return (
    <Box
      position="relative"
      width="380px"
      height="460px"
      borderRadius="20px"
      background="linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)"
      boxShadow="-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)"
      mr="auto"
      ml="auto"
      pt="28px"
      as="li"
    >
      <LogoComponent />
      <Hero />
      <Delimiter />
      <AvatarCover>
        <AvatarBg>
          <UserAvatar avatar={avatar} />
        </AvatarBg>
      </AvatarCover>
      <StatisticInfo data={{ tweets, followers }} />
      <Button style={{ background: color }} onClick={follow} status={status}>
        {!status ? 'Follow' : 'Following'}
      </Button>
    </Box>
  );
};
