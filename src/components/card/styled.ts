import styled from 'styled-components';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';

export const Container = styled.div`
  padding: 30px 30px 30px 30px;
  width: 100%;
  /* min-width: 280px; */
  max-width: 770px;
  /* margin-right: 30px; */
  border: 1px solid #02ba95;
  background: radial-gradient(
      97.27% 190.65% at 2.73% 3.73%,
      rgba(2, 186, 149, 0.158) 0%,
      rgba(0, 255, 163, 0) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  /* linear-gradient(0deg, #02ba95, #02ba95), */
  /* linear-gradient(0deg, rgba(52, 57, 55, 0.38), rgba(52, 57, 55, 0.38)); */

  @media screen and (max-width: 768px) {
    width: calc(90% - 60px);
    margin: 0 auto;
  }
`;
export const TitleText = styled.h1`
  font-weight: 500;
  font-size: 18px;
  font-style: italic;
  color: ${Colors.textSecondary};
  font-family: ${Fonts.primary};
`;

export const Header1 = styled.h1`
  font-weight: 700;
  font-size: 40px;
  font-style: italic;
  color: ${Colors.textSecondary};
  font-family: ${Fonts.primary};
`;

export const Header2 = styled.h1`
  font-weight: 700;
  font-size: 40px;
  color: ${Colors.textPrimary};
  font-family: ${Fonts.primary};
`;

export const Description = styled.p`
  text-align: start;
  color: ${Colors.textPrimary};
  font-family: ${Fonts.primary};
  font-size: 28px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
`;
