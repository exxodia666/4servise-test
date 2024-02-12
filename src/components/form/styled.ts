import {styled} from 'styled-components';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  padding-top: 16px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TextInput = styled.input`
  border: none;
  margin-top: 12px;
  background-color: ${Colors.background};

  width: 80%;
  height: 30px;
  color: ${Colors.textPrimary};
  font-family: ${Fonts.primary};
  font-weight: 400;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: ${Colors.textPrimary};
    font-family: ${Fonts.primary};
    font-weight: 400;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SubmitContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ErrorText = styled.p`
  margin: 0px;
  color: red;
`;

export const TylerDurden = styled.img`
  width: 78px;
  height: 78px;
  border-radius: ${78 / 2}px;
`;

export const TylerOuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    147.73deg,
    rgba(2, 186, 149, 0.52) 24.78%,
    rgba(235, 46, 75, 0.52) 152.86%,
    rgba(0, 255, 163, 0.52) 152.86%
  );
  width: 108px;
  height: 108px;
  border-radius: 54px;
  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

export const TylerInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.secondary};

  width: 88px;
  height: 88px;
  border-radius: ${88 / 2}px;
`;

export const Button = styled.button`
  background-color: ${Colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${Colors.secondary};
  width: 170px;
  height: 50px;
  border-radius: 100px;
  &::placeholder {
    color: ${Colors.textPrimary};
    font-family: ${Fonts.primary};
    font-weight: 400;
    font-size: 16px;
  }
`;

export const ButtonText = styled.p`
  color: ${Colors.textPrimary};
  font-size: 16px;
  font-weight: 700;
  font-family: ${Fonts.primary};
`;

export const Policy = styled.label`
  color: #767676;
  width: 70%;
  font-family: ${Fonts.primary};
  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const Link = styled.a`
  color: ${Colors.secondary};
  text-decoration: underline;
  font-family: ${Fonts.primary};
`;

export const LabelRow = styled.label`
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  display: none;
`;

export const Mark = styled.div`
  margin-right: 11px;
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: ${17 / 2}px;
  justify-content: center;
  align-items: center;
  border: 2px solid #fff;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Dot = styled.div`
  background-color: #fff;
  width: 7px;
  height: 7px;
  border-radius: ${5 / 2}px;
`;
