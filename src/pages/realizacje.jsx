import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';

const IntroSection = styled.section`
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

const PortfolioItem = styled.article`
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
    position: 'bottomRight', size: '100px', distance: '40px', color: theme.color.beige, pseudoelement: 'before',
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

const Realizacje = ({ data }) => (
  <ContentWrapper isSubpage>
    <IntroSection>
      <div>
        <HighlightedHeading>Poznaj nasze realizacje</HighlightedHeading>
        <p>
          Każda współpraca to dla nas wspaniała przygoda, a to co po niej pozostaje, to pełna
          satysfakcja naszych klientów. Sprawdź, co udało nam się do tej pory osiągnąć.
        </p>
      </div>
      <img src={data.intro0.publicURL} alt="" />
    </IntroSection>
    <PortfolioItem>
      <div>
        <HighlightedHeading>ul. Sielska</HighlightedHeading>
        <p>
          Usługa obejmowała zarówno pośrednictwo w wynajmie nieruchomości, jak również pełną
          aranżację wnętrza i przestrzeni mieszkania. Nieruchomość została zarezerwowana na 1
          prezentacji.
        </p>
      </div>
      <img src={data.sielska1.publicURL} alt="" />
    </PortfolioItem>
    <PortfolioItem>
      <div>
        <HighlightedHeading>ul. Fieldorfa</HighlightedHeading>
        <p>
          Mieszkanie sprzedawane przez zaprzyjaźnionych właścicieli, z którymi połączyłyśmy
          transakcję sprzedaży nieruchomości z zakupem ich nowego mieszkania.
        </p>
      </div>
      <img src={data.fieldorfa2.publicURL} alt="" />
    </PortfolioItem>
    <PortfolioItem>
      <div>
        <HighlightedHeading>ul. Rolna</HighlightedHeading>
        <p>
          Nietuzinkowe mieszkanie, które zarówno na nas jak i na klientach zrobiło ogromne wrażenie,
          a wisienką na torcie był przestronny i klimatyczny taras na dachu.
        </p>
      </div>
      <img src={data.rolna3.publicURL} alt="" />
    </PortfolioItem>
    <PortfolioItem>
      <div>
        <HighlightedHeading>ul. Staszica</HighlightedHeading>
        <p>
          Transakcja wynajmu mieszkania, przy której na naszych oczach zrodziła się piękna przyjaźń
          między Wynajmującą - Panią Katarzyną, a Najemczynią - Panią Gosią
        </p>
      </div>
      <img src={data.staszica4.publicURL} alt="" />
    </PortfolioItem>
  </ContentWrapper>
);
export const query = graphql`
    query {
        intro0: file(relativePath: {regex: "/realizacje\/0_intro.jpg/"}) {
            publicURL
        },
        sielska1: file(relativePath: {regex: "/realizacje\/1_sielska.jpg/"}) {
            publicURL
        },
        fieldorfa2: file(relativePath: {regex: "/realizacje\/2_fieldorfa.jpg/"}) {
            publicURL
        },
        rolna3: file(relativePath: {regex: "/realizacje\/3_rolna.jpg/"}) {
            publicURL
        },
        staszica4: file(relativePath: {regex: "/realizacje\/4_staszica.jpg/"}) {
            publicURL
        },

    }`;

export default Realizacje;
