import styled from 'styled-components';
import { fontXSRegular } from '../../styles/Fonts';
import { searchButtonWidth } from '../SearchBar/styles';

export const HeaderStyle = styled.header`
  ${fontXSRegular}
  background: var(--blackberry-dark);
  color: var(--coconut-color);
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
  margin-bottom: 8px;
  align-self: flex-end;
`;

export const UserSpan = styled.span`
  margin-right: 8px;
`;

export const TotalSpan = styled.span`
  padding: 8px 0px 0px ${searchButtonWidth(32)};;
`;
