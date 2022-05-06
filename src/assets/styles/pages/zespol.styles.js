import styled from 'styled-components';

export const Hero = styled.div`
  background-image: url("${({ imageSource }) => imageSource}");
  background-size: cover;
  background-position: 10% 0;
  width: calc(100% + 40px);
  margin-left: -20px;
  height: 90vh;
  display: flex;
  text-align: center;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 50px;

  h1 {
    font-size: ${({ theme }) => theme.font.size.heading};
    margin: 0;
  }

  h1, p {
    color: white;
    text-shadow: 0 0 20px black;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    height: ${({ theme }) => theme.size.desktopHeroHeight};
    width: calc(100% + 200px);
    margin-left: -100px;
  }
`;

export const InfoItem = styled.article`
  margin: 100px 0;

  img {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1000px;
    margin: 150px auto;
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
      div {
        padding-right: 80px;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
      
      div {
      padding-left: 80px; 
      }
    }
    }
`;

export const InfoItemContent = styled.div`
  h2 {
    margin: 10px 0;
  }

  p:first-of-type {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.thumbnailSmall};
    font-weight: 500;
    color: ${({ theme }) => theme.color.darkBeige};
    margin: 0 0 30px 0;
  }

  a {
    display: flex;
    align-items: center;
    margin: 15px 0;
    color: ${({ theme }) => theme.color.black};
    font-weight: 500;

    svg {
      margin-right: 10px;
    }
  }
`;
