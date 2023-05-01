import { Twit } from 'components/Twit/Twit';

export const UserListItem = ({ user, onClick }) => {
  return <Twit user={user} onClick={onClick} />;
};
