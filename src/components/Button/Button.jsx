import { StyledButton } from './Button.styled';

export const Button = ({ onClick, children, style }) => {
  return (
    <StyledButton style={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
