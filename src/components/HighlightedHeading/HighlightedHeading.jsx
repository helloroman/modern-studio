import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledHeading = styled.div`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  position: relative;

  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    height: calc(${({ theme }) => theme.font.size.headingSmall} * 1.5);
    top: calc(-${({ theme }) => theme.font.size.headingSmall} / 6);
    left: -50%;
    background-color: ${({ theme }) => theme.color.beige};
  }
`;

export const HighlightedHeading = ({ level = '2', children }) => <StyledHeading as={`h${level}`}>{children}</StyledHeading>;

HighlightedHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string,
};
