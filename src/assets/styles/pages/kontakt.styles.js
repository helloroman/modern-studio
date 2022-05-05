import styled from 'styled-components';
import { ContentWrapper } from '../../../components/ContentWrapper/ContentWrapper.styles';
import { ContactForm } from './homepage.styles';

export const ContactInfoWrapper = styled.section`
  a {
    color: black;
    display: flex;
    align-items: center;
    margin: 5px 0 10px -7px;
  }
`;

export const ContactPhoto = styled.div`
  display: none;
  
  ${({ theme }) => theme.mq.desktop} {
    display: initial;
    position: relative;
    background-image: url("${({ imageSource }) => imageSource}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 80%;
    
    ${({ theme }) => theme.effect.corner({
    position: 'bottomLeft', size: '100px', distance: '30px;', color: theme.color.steel,
  })};
  }
`;

export const ContactContentWrapper = styled(ContentWrapper)`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 100px;
    
    ${ContactForm} {
      width: 100%;
      margin: 0;
    }
    
    ${ContactForm}, ${ContactInfoWrapper} {
      grid-column: 1 / 2;
    }
    
    ${ContactPhoto} {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
  }
`;
