import image from '../../images/Hero.png';
import { Delimiter, HeroImg } from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <HeroImg src={image} alt="hero image"></HeroImg>
      <Delimiter />
    </>
  );
};
