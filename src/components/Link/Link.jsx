import { StyledNavLink } from './Link.styled';

export const Link = ({ to, children }) => {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
};
