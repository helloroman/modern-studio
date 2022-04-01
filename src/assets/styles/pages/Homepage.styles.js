import styled from 'styled-components';
import { Link } from 'gatsby';
import arrowIcon from 'assets/styles/arrow.svg';

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
`;

export const HeroParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  text-shadow: ${({ theme }) => theme.font.shadow};
`;

export const ContentWrapper = styled.div`
  padding: 0 20px;
`;

const StyledSection = styled.section`
  margin: 100px 0;
`;

export const WelcomeSection = styled(StyledSection)`
  margin: 70px 0;
  padding: 0 20px;
`;

export const WelcomeSectionContent = styled.div`
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

  &::after {
    position: absolute;
    width: 70px;
    height: 70px;
    content: '';
    clip-path: polygon(0 16%, 0 0, 100% 0, 100% 100%, 84% 100%, 84% 16%);
    background-color: ${({ theme }) => theme.color.dark};
    right: -20px;
    top: -20px;
  }
`;

export const WelcomeSectionImage = styled.div`
  margin-top: 10px;
  width: 90%;
  height: 170px;
  position: relative;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    position: absolute;
    width: 70px;
    height: 70px;
    content: '';
    clip-path: polygon(0 0, 16% 0, 16% 84%, 100% 84%, 100% 100%, 0 100%);
    background-color: ${({ theme }) => theme.color.beige};
    left: -20px;
    bottom: -20px;
  }
`;

export const AdvantagesSection = styled(StyledSection)``;
export const ServicesSection = styled(StyledSection)``;

export const StyledList = styled.ul`
  padding: 0;
  list-style: none;

  li {
    margin: 30px 0;

    h3 {
      font-family: ${({ theme }) => theme.font.family.montserrat};
      font-weight: 700;
      margin: 0;
    }
  }
`;

export const StyledButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.dark};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.size.button};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 10px 15px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  margin: ${({ isCentered }) => (isCentered ? '15px auto' : '15px 0')};
`;

export const StyledLinkButton = styled(Link)`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.dark};
  text-decoration: underline;
  position: relative;

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

export const ShowcaseSection = styled(StyledSection)`
  h2 {
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    text-align: center;
    margin: 30px 0;
  }
`;

export const ShowcaseGallery = styled.div`
  margin: 50px 0;
`;

export const ShowcaseImage = styled.img`
  width: 100%;
  height: ${({ isBig }) => (isBig ? '250px' : '125px')};
  object-fit: cover;
  margin: 10px 0;
`;

export const TeamSection = styled(StyledSection)``;

export const TeamImage = styled.div`
  margin-top: 30px;
  width: 90%;
  height: 300px;
  position: relative;
  background-image: url("${({ imageSource }) => imageSource}");
  background-repeat: no-repeat;
  background-size: cover;

  ${({ theme }) => theme.effect.corner({ position: 'bottomRight' })};
`;

export const ReviewsSection = styled(StyledSection)``;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  
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
`;
