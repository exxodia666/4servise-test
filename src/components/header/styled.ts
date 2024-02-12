import styled from 'styled-components';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';

export const Tagline = styled.p`
  padding-top: 5px;
  padding-left: 10px;
  color: ${Colors.secondary};
  font-family: ${Fonts.primary};
  font-weight: 700;
`;

export const Logo = styled.img``;

export const LangSelector = styled.p`
  color: ${Colors.textPrimary};
  font-family: ${Fonts.primary};
  margin-right: 10px;
`;

export const Header = styled.header`
  width: calc(100% - 50px);
  padding: 18px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
