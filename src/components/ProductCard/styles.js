import styled, { css } from 'styled-components';

export const ImageContainer = styled.div`
    ${(props) => css`
    {
      background-image: url(${props.url});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 396px;;
    }
  `}
`;

export const ValueContainer = styled.div`
  color: var(--blackberry-dark);
`;

export const TagContainer = styled.div`
  color: var(--blackberry-light);
`;