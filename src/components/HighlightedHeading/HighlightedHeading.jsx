import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import { StyledHeading } from './HighlightedHeading.styles';

export const HighlightedHeading = ({
  width, level = '2', children, isRight = false, ...props
}) => {
  const headingRef = useRef(null);
  const [playState, setPlayState] = useState(false);

  const handlePlayStateChange = throttle(() => {
    const { top } = headingRef.current.getBoundingClientRect();
    if (top < 800) {
      setPlayState(true);
    }
  }, 150);

  useEffect(() => {
    document.addEventListener('scroll', handlePlayStateChange);

    return () => {
      document.removeEventListener('scroll', handlePlayStateChange);
    };
  }, []);

  return (
    <StyledHeading playState={playState} ref={headingRef} width={width} isRight={isRight} as={`h${level}`} {...props}>{children}</StyledHeading>
  );
};

HighlightedHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string,
  isRight: PropTypes.bool,
  width: PropTypes.string,
};
