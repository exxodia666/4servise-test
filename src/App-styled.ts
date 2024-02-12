import styled from 'styled-components';
import {Colors} from './theme/colors';
import {Fonts} from './theme/fonts';

export const Container = styled.div`
  margin: 0px 135px;
  align-items: center;
  justify-content: center;
`;

export const SliderContainer = styled.div``;

export const Title = styled.h1`
  margin-top: 60px;
  text-align: center;
  /* background-color: red; */
  margin: auto;
  color: ${Colors.textPrimary};
  font-family: ${Fonts.primary};
`;

export const Description = styled.p`
  width: 1170;
  margin-bottom: 60px;
  text-align: center;
  /* background-color: red; */
  margin: auto;
  color: ${Colors.textPrimary};
  font-family: Montserrat;
  font-size: 40px;
  /* line-height: 46px; */
`;

export const Item = styled.li`
  background-color: red;
  color: ${Colors.textPrimary};
  font-family: Montserrat;
  font-size: 28px;
  /* line-height: 32.2; */
  text-align: left;
  width: 770px;
`;
