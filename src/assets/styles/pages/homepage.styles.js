import styled from 'styled-components';
import { Link } from 'gatsby';
import arrowIcon from 'assets/icons/arrow.svg';
import { StyledList } from 'components/StyledList/StyledList.styles';
import { CornerEffect } from '../../../components/CornerEffectProvider/CornerEffect';

export const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.dark};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.size.button};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 10px 15px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  margin: 8px 15px;
`;

export const StyledLinkButton = styled(Link)`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.dark};
  text-decoration: underline;
  position: relative;
  display: inline-block;
  margin: 5px 0 10px;

  &::after {
    position: absolute;
    content: '';
    background-image: url("${arrowIcon}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 50%;
    width: 20px;
    height: 20px;
    right: -35px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Hero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
  padding: 35px;
`;

export const HeroHeading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.headingMobile};
  margin: 0;
  text-shadow: ${({ theme }) => theme.font.shadow};
  
  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.heading};
    max-width: 500px;
    text-align: center;
  }
`;

export const HeroParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  text-shadow: ${({ theme }) => theme.font.shadow};
`;

const StyledSection = styled.section`
  margin: 100px 0;
  
  ${({ theme }) => theme.mq.desktop} {
    margin: 100px 0;
  }
`;

export const WelcomeSection = styled(StyledSection)`
  padding: 0 20px;
  
  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 180px 0 150px;
  }
  
  ${({ theme }) => theme.mq.bigDesktop} {
    margin: 180px 0 100px;
  }
`;

export const WelcomeSectionContent = styled(CornerEffect)`
  background-color: ${({ theme }) => theme.color.dark};
  padding: 30px 20px;
  position: relative;

  h2 {
    margin: 0 0 20px 0;
    font-size: 2.5rem;
    font-weight: 400;
    color: white;
  }

  p {
    color: white;
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }
  
  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    width: 50%;
    top: 100px;
    height: auto;
    padding: 50px;
    right: 20px;
    
    h2 {
      font-size: ${({ theme }) => theme.font.size.headingSmall};
    }
  }
  
  ${({ theme }) => theme.mq.bigDesktop} {
    top: 150px;
  }
`;

export const WelcomeSectionImage = styled(CornerEffect)`
  margin-top: 10px;
  width: 90%;
  height: 170px;
  position: relative;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 80%;
  
  ${({ theme }) => theme.mq.desktop} {
    z-index: -1;
    top: -80px;
    height: 500px;
    width: 70%;
  }
`;

export const AdvantagesSection = styled(StyledSection)`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ShowcaseSection = styled(StyledSection)`
  h2 {
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    text-align: center;
    margin: 30px 0 10px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    margin-top: -60px;
    
    h2 {
      margin: 0 0 30px;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const ShowcaseGallery = styled.div`
  margin: 25px 0 50px;
  position: relative;
  
  ${({ theme }) => theme.mq.desktop} {
    margin: 50px 0 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 25px;
    position: relative;

    img:nth-child(1) {
      grid-row: 1 / 2
    }

    img:nth-child(2) {
      grid-row: 1 / 3
    }

    img:nth-child(3) {
      grid-row: 2 / 4
    }

    img:nth-child(4) {
      grid-row: 3 / 4
    }
  }
`;

export const ShowcaseCorner = styled(CornerEffect)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

export const ShowcaseImage = styled.img`
  width: 100%;
  height: ${({ isBig }) => (isBig ? '250px' : '125px')};
  object-fit: cover;
  margin: 10px 0;
  
  ${({ theme }) => theme.mq.desktop} {
    height: 100%;
    margin: 0;
  }
`;

export const ServicesSection = styled(StyledSection)`

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 50px;
    
    div:first-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    & > p {
      align-self: center;
      max-width: 450px;
    }
    
    ${StyledList} {
      grid-row: 2 / 2;
      grid-column: 1 / 3;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const TeamImage = styled(CornerEffect)`
  margin-top: 30px;
  width: 90%;
  height: 300px;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TeamSection = styled(StyledSection)`
  ${TeamImage}:last-child {
    display: none;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 50px;
    
    div:nth-child(1) {
      grid-column: 1 / 1;
    }
    
    ${TeamImage} {
      margin: 0;
    }
    
    ${TeamImage}:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      width: 50%;
      justify-self: end;
    }
    
    ${TeamImage}:last-child {
      height: 100%;
      grid-row: 1 / 3;
      grid-column: 2 / 3;
      display: block;
    }
  }
`;

export const ReviewsSection = styled(StyledSection)`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 120px;
    
    div:first-child {
      grid-row: 1 / 1;
      grid-column: 2 / 3;
      align-self: center;
      
      h2 {
        max-width: 300px;
        margin: 0;
      }
    }

    div:last-child {
      grid-row: 1 / 1;
      grid-column: 1 / 2;
    }
  }
`;

export const StyledReview = styled.div`
  border: 1px solid ${({ theme }) => theme.color.steel};
  padding: 40px 40px 20px;
  margin: 30px 0;
  
  p:last-child {
    margin-top: 30px;
    font-weight: 700;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  
  button {
    margin: 10px 0;
  }
  
  label {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 500;
    margin: 15px 0 0;
  }
  
  input, textarea {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    margin: 5px 0;
    resize: none;
    padding: 5px;
  }
  
  textarea {
    min-height: 200px;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    max-width: 400px;
    margin: 0 auto 100px;
    
    h2 {
      max-width: 300px;
      margin: 30px auto;
    }
  }
`;
