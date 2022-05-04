import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './HighlightedHeading.styles';

export const HighlightedHeading = ({ level = '2', children, ...props }) => <StyledHeading as={`h${level}`} {...props}>{children}</StyledHeading>;

HighlightedHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string,
};
