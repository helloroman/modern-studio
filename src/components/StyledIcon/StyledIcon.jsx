import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const StyledIconWrapper = styled.span`
  display: inline-block;
  
  svg {
    width: 100%;
    height: auto;
  }
  
  svg path {
    fill: ${({ isDark }) => (isDark ? '#000' : '#fff')};
  }
`;

export const StyledIcon = ({ children, ...props }) => (
  <StyledIconWrapper {...props}>
    {children}
  </StyledIconWrapper>
);

StyledIcon.propTypes = {
  children: PropTypes.node.isRequired,
};
