import { StyledButton } from './Button.styled';

export const Button = ({ onClick, children, status }) => {
  const color = !status ? '#ebd8ff' : '#5cd3a8';

  return (
    <StyledButton style={{ background: color }} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
