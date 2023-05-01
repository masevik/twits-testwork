import image from '../../images/Boy2.png';
import { Avatar } from './UserAvatar.styled';

export const UserAvatar = ({ avatar }) => {
  return (
    <div>
      {avatar ? (
        <Avatar src={avatar} alt="avatar"></Avatar>
      ) : (
        <Avatar src={image} alt="placeholder"></Avatar>
      )}
    </div>
  );
};
