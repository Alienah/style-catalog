import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background: var(--blackberry-dark);
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  @media (min-width: 768px) {
    min-height: 224px;
    padding: 26px 68px;
  }
`;

export const UserContainer = styled.div`
  color: var(--coconut-color);
  @media (min-width: 768px) {
    align-self: flex-end;
  }
`;

export const UserSpan = styled.span`
  @media (min-width: 768px) {
    margin-right: 8px;
  }
`;

export const TotalSpan = styled.span`
  color: var(--coconut-color);
`;
