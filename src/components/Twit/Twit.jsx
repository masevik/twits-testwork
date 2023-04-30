import { Box } from 'components/Box';
import { Hero } from 'components/Hero/Hero';
import { LogoComponent } from 'components/Logo/Logo';
import { AvatarBg, AvatarCover, Delimiter } from './Twit.styled';
import { UserAvatar } from 'components/UserAvatar/UserAvatar';

export const Twit = () => {
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
    >
      <LogoComponent />
      <Hero />
      <Delimiter />
      <AvatarCover>
        <AvatarBg>
          <UserAvatar />
        </AvatarBg>
      </AvatarCover>
    </Box>
  );
};
