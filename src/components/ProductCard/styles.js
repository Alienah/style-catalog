import styled, { css } from 'styled-components';
import { fontLabelMMedium, fontXSRegular, fontXXSMedium } from '../../styles/Fonts';
import check from '../../assets/images/check.svg';

export const ImageContainer = styled.div`
    ${(props) => css`
    {
      background-image: url(${props.url});
      background-repeat: no-repeat;
      background-position: right;
      background-size: cover;
      height: 396px;
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 8px;
      border-radius: 2px 2px 0px 0px;
      position: relative;
      @media (min-width: 1024px) {
        padding: 13px 20px 13px 16px;
      }
    }
    &::after {
      content: '';
      background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
      position: absolute;
      left: 72.33%;
      right: 0;
      top: 0;
      height: 100%;
    }
  `}
`;

export const CheckboxContainer = styled.div`
  height: 20px;
  width: 100%;
  position: relative;
  padding: 8px;
  @media (min-width: 1024px) {
    padding: 13px 20px 0px 16px;
  }
`;
export const Checkbox = styled.input`
    background: none;
    border: 1px solid black;
    margin: 0;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    opacity: 0;
    height: 20px;
    z-index: 1;
    &:checked + span::after{
      display: block;
    }
    &:checked + span{
      background-color: var(--blackberry-dark);
    }
`;

export const CheckboxSpan = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    border: 2px solid var(--blackberry-dark);
    height: 20px;
    width: 20px;
    &::after {
      content: "";
      display: none;
      position: absolute;
      left: 0px;
      top: 0px;
      height: 100%;
      width: 100%;
      border: solid var(--blackberry-dark);
      background-image: url(${check});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      padding: 2px;
    }

`;

export const StatisticsContainer = styled.div`
  ${fontXSRegular};
  text-align: right;
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ValueContainer = styled.div`
  color: var(--blackberry-dark);
`;

export const TagContainer = styled.div`
  margin-bottom: 8px;
  color: var(--blackberry-light);
`;

export const NotVisibleTag = styled.div`
  ${fontLabelMMedium};
  background-color: var(--apricot-color);
  height: 20px;
  width: 78px;
  padding: 4px 6px;
  color: var(--white-color);
`;

export const NameContainer = styled.div`
  ${fontXXSMedium};
  margin-top: 8px;
`;