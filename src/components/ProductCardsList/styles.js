import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 948px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;