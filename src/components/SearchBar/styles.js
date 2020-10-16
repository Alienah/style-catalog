import styled, { css } from 'styled-components';
import { fontXL, fontXXL } from '../../styles/Fonts';

export const Form = styled.form`
  display: flex;
  align-items: center;
  color: var(--white-color);
`;

export const Image = styled.img`
  min-height: 30px;  
`;

export const Input = styled.input`
  ${fontXL}
  background: transparent;
  border: none;
  padding: 0 16px;
  color: var(--white-color);
  @media (min-width: 768px) {
    ${fontXXL}
  }
`;

export const searchButtonWidth = (paddingRight) => {
  const buttonWidth = 42;
  return css`${buttonWidth + paddingRight}px`;
}

const paddingRight = 16;
export const Button = styled.button`
  
  height: 48px;
  padding-right: ${paddingRight}px;
  border-right: 1px solid var(--mid-gray);
  color: var(--white-color);
  display: flex;
  align-items: center;
  width: ${searchButtonWidth(paddingRight)};
  @media (min-width: 768px) {
    ${fontXXL}
  }  
`;
