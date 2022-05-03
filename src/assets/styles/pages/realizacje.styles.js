import styled from 'styled-components';

export const IntroSection = styled.section`
  img {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;
    position: relative;

    div {
      width: 50%;
      padding-right: 80px;
    }

    img {
      width: 50%;
    }

    ${({ theme }) => theme.effect.corner({ position: 'bottomRight', size: '100px', distance: '40px' })};
  }
`;

export const PortfolioItem = styled.article`
  margin: 100px 0;

  img {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 150px 0;
    display: flex;
    align-items: center;
    position: relative;

    div {
      width: 50%;
    }

    img {
      width: 50%;
    }

    &:nth-child(odd) {
      ${({ theme }) => theme.effect.corner({ position: 'topRight', size: '100px', distance: '40px' })};

      div {
        padding-right: 80px;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
      ${({ theme }) => theme.effect.corner({
    position: 'topLeft', size: '100px', distance: '40px', color: theme.color.beige,
  })};

      div {
        padding-left: 80px;
      }
    }

    &:last-child {
      width: 100%;
      flex-direction: column;
      ${({ theme }) => theme.effect.corner({
    position: 'bottomRight',
    size: '100px',
    distance: '40px',
    color: theme.color.beige,
    pseudoelement: 'before',
  })};

      // After was overwritten by the styles above
      // so ::before element was used instead
      &::after {
        display: none;
      }

      img {
        width: 100%;
      }

      div {
        text-align: center;
        margin: 30px auto;
        padding: 0;
      }
    }
  }
`;
