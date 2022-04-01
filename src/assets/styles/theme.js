import { css } from 'styled-components';

export const theme = {
  color: {
    beige: 'hsl(33,23%,83%)',
    steel: 'hsl(225,23%,83%)',
    orange: 'hsl(14,64%,54%)',
    dark: 'hsl(210,11%,30%)',
    black: 'hsl(0,0%,0%)',
    brown: 'hsl(355,13%,20%)',
  },
  font: {
    shadow: '5px 5px 10px hsla(0, 0%, 0%, 0.15)',
    size: {
      heading: '5rem',
      headingMobile: '5.3rem',
      headingSmall: '4.2rem',
      paragraph: '1.6rem',
      caption: '1.35rem',
      mobileMenu: '2.1rem',
      button: '1.2rem',
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
  effect: {
    /**
     * @param {('topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight')} position
     * @param size
     * @param color
     */
    corner: ({ position = 'topLeft', size = '70px', color = theme.color.dark }) => css`
      &::after {
        position: absolute;
        width: ${size};
        height: ${size};
        content: '';
        ${() => {
    switch (position) {
      case 'topLeft':
        return css`
          clip-path: polygon(100% 16%, 16% 16%, 16% 100%, 0 100%, 0 0, 100% 0);
          top: -20px;
          left: -20px;
        `;
      case 'bottomLeft':
        return css`
          clip-path: polygon(0 0, 16% 0, 16% 84%, 100% 84%, 100% 100%, 0 100%);
          bottom: -20px;
          left: -20px;
        `;
      case 'topRight':
        return css`
          clip-path: polygon(0 16%, 0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%);
          top: -20px;
          right: -20px;
        `;
      case 'bottomRight':
        return css`
          clip-path: polygon(84% 0, 84% 84%, 0 84%, 0 100%, 100% 100%, 100% 0%);
          bottom: -20px;
          right: -20px;
        `;
      default:
        return '';
    }
  }};
        background-color: ${() => color};
      }
      `,
  },
};
