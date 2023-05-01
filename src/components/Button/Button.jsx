import { StyledButton } from './Button.styled';

export const Button = ({ onClick, children, status }) => {
  let color;

  if (!status) {
    color = '#ebd8ff';
  } else {
    color = '#5cd3a8';
  }

  return (
    <StyledButton style={{ background: color }} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
