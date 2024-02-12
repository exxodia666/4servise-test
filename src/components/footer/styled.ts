import {styled} from 'styled-components';
import {Colors} from '../../theme/colors';

export const Description = styled.p`
  text-align: start;
  color: ${Colors.textPrimary};
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 600;
  max-width: 400px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 5px;
  }
`;

export const Container = styled.footer`
  margin: 52px auto;
  padding-top: 51px;
  padding-bottom: 46px;
  width: 80%;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 20px;
  }
`;
