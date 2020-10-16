import React from 'react';
import spinner from '../../assets/images/spinner.svg';
import { Container, Image, Span } from './styles';
import PropTypes from 'prop-types';

export const Spinner = ({loadingStyles}) => {
  return (
    <Container>
      <Image src={spinner} alt="loading icon" />
      <Span>{ loadingStyles ? "We're searching the styles" : "We're hiding the styles" }</Span>
    </Container>
  )
}

Spinner.propTypes = {
  loadingStyles: PropTypes.bool.isRequired,
}