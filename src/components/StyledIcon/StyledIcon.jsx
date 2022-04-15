import PropTypes from 'prop-types';
import React from 'react';
import { StyledIconWrapper } from './StyledIcon.styles';

export const StyledIcon = ({ children, ...props }) => (
  <StyledIconWrapper {...props}>
    {children}
  </StyledIconWrapper>
);

StyledIcon.propTypes = {
  children: PropTypes.node.isRequired,
};
