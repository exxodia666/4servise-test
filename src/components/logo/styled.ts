import styled from 'styled-components';
import {Colors} from '../../theme/colors';

export const Container = styled.div`
  margin: 0 -30px;
  display: flex;
  height: 370px;
  width: 370px;
  border-radius: 50%;
  border: 1px solid ${Colors.textSecondary};
  justify-content: center;
  align-items: center;

  transition: all 0.3 ease-in-out;
  @media screen and (max-width: 991px) {
    height: 320px;
    width: 320px;
  }

  @media screen and (max-width: 768px) {
    height: 240px;
    width: 240px;
  }
`;

export const Image = styled.img`
  transition: all 0.3 ease-in-out;
  @media screen and (max-width: 991px) {
    transform: scale(0.7);
  }

  @media screen and (max-width: 768px) {
    transform: scale(0.5);
  }
`;
