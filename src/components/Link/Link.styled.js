import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: block;
  margin-right: 32px;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  border: none;
  border-radius: 10.31px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  font-weight: 600;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition-duration: 300ms;

  @media screen and (max-width: 380px) {
    margin-right: 15px;
    width: 150px;
  }

  @media screen and (min-width: 380px) {
    margin-right: 32px;
  }

  :hover,
  :focus {
    background: #5cd3a8;
    box-shadow: none;
  }
`;
