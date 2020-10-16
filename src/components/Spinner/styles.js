import styled from 'styled-components';
import { fontXL } from '../../styles/Fonts';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(178.88deg, rgba(0, 0, 0, 0.04) 0.95%, rgba(0, 0, 0, 0) 99.04%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 342px;
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: loading-spinner infinite 1.5s linear;
  }

  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Span = styled.span`
  ${fontXL};
  margin-top: 20px;
`;