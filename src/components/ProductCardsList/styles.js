import styled from 'styled-components';
import { fontMMedium, fontXSRegular } from '../../styles/Fonts';

export const Wrapper = styled.div`
  width: 100%;
  background: var(--light-color);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  min-height: 342px;
  @media (min-width: 948px) {
    padding: 24px;
  }
  @media (min-width: 1024px) {
    padding: 24px 76px;
    max-width: 1440px;
  }
`;

export const Title = styled.h2`
  ${fontMMedium};
  padding: 2px 20px;
`;

export const Error = styled.span`
  ${fontXSRegular};
  padding: 2px 20px;
`;

export const Button = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%50%;
  background-color: var(--blueberry-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-self: flex-end;
`;

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 16px;
  grid-row-gap: 11px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 11px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;