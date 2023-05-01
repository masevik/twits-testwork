import { UserListItem } from 'components/UserListItem/UserListItem';
import { UserListStyled } from './UserList.styled';

export const UserList = ({ users }) => {
  return (
    <UserListStyled>
      {users.map(user => (
        <UserListItem user={user} key={user.id} />
      ))}
    </UserListStyled>
  );
};
