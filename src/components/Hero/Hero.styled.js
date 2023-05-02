import styled from 'styled-components';

export const HeroImg = styled.img`
  margin: 0px auto 18px;
`;

export const Delimiter = styled.div`
  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    margin-bottom: 62px;
  }
`;
