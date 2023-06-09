import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  text-transform: uppercase;
  border: none;
  border-radius: 10.31px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  font-weight: 600;
  color: #373737;
  cursor: pointer;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition-duration: 300ms;

  @media screen and (max-width: 380px) {
    width: 150px;
    padding: 12px 15px;
  }

  :hover,
  :focus {
    background-color: #5cd3a8;
    box-shadow: none;
  }
`;
