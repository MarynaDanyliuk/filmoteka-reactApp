import PropTypes from 'prop-types';
import React from 'react';
import { StyledTitle } from './Title.styles';

export const Title = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

Title.defaultProps = {
  children: null,
};

Title.propTypes = {
  children: PropTypes.node,
};
