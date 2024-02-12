import styled from 'styled-components';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';

export const Container = styled.div``;

export const SubContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export const SliderContainer = styled.div`
  overflow-x: hidden;
`;

export const Title = styled.h1`
  margin-top: 60px;
  text-align: center;
  width: 80%;
  color: ${Colors.textPrimary};
  font-family: ${Fonts.primary};
`;

export const Title2 = styled.h1`
  margin-top: 20px;
  text-align: start;
  font-size: 40px;
  color: ${Colors.textPrimary};
  font-family: ${Fonts.primary};
`;

export const Description2 = styled.p`
  max-width: 1170px;
  text-align: start;
  color: ${Colors.textSecondary};
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 500;
  margin: 20px 0px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  max-width: 1170px;
  text-align: center;
  margin: 60px auto;
  color: ${Colors.textPrimary};
  font-family: Montserrat;
  font-size: 40px;
  margin-bottom: 110px;
  padding: 0px 10px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const List = styled.ul`
  margin-bottom: 60px;
`;

export const Item = styled.li`
  color: ${Colors.textPrimary};
  font-family: Montserrat;
  font-size: 28px;
  text-align: left;
  max-width: 770px;
`;
