import { css, keyframes } from 'styled-components';

const showTopLeftCorner = keyframes`
  0% {
    clip-path: polygon(16% 100%, 16% 100%, 16% 100%, 0 100%, 0 100%, 16% 100%);
  }
  50% {
    clip-path: polygon(16% 16%, 16% 16%, 16% 100%, 0 100%, 0 0, 16% 0);
  }
  100% {
    clip-path: polygon(100% 16%, 16% 16%, 16% 100%, 0 100%, 0 0, 100% 0);
  }
`;

export const theme = {
  color: {
    beige: 'hsl(33,23%,83%)',
    darkBeige: 'hsl(33,23%,33%)',
    steel: 'hsl(225,23%,83%)',
    orange: 'hsl(14,64%,54%)',
    dark: 'hsl(210,11%,30%)',
    black: 'hsl(0,0%,0%)',
    brown: 'hsl(355,13%,20%)',
  },
  size: {
    desktopHeroHeight: '800px',
  },
  font: {
    shadow: '5px 5px 10px hsla(0, 0%, 0%, 0.15)',
    size: {
      heading: '5rem',
      headingMobile: '5.3rem',
      headingSmall: '4.2rem',
      paragraph: '1.5rem',
      caption: '1.35rem',
      mobileMenu: '2.1rem',
      button: '1.2rem',
      thumbnail: '1.8rem',
      thumbnailSmall: '1.4rem',
    },
    family: {
      montserrat: '"Montserrat", sans-serif',
      cormorant: '"Cormorant Garamond", serif',
    },
  },
  mq: {
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    bigDesktop: '@media (min-width: 1280px)',
    huge: '@media(min-width: 1440px)',
  },
};
