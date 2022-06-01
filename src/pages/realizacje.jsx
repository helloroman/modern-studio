import React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { IntroSection, PortfolioItem } from 'assets/styles/pages/realizacje.styles';
import { CornerEffect } from '../components/CornerEffectProvider/CornerEffect';

const Realizacje = ({ data }) => (
  <ContentWrapper isSubpage>
    <CornerEffect position="bottomRight" size="100px" distance="30px">
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
    </CornerEffect>
    <CornerEffect position="topLeft" size="100px" distance="30px" color="beige">
      <PortfolioItem isOdd>
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
    </CornerEffect>
    <CornerEffect position="bottomRight" size="100px" distance="30px" color="dark">
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
    </CornerEffect>
    <CornerEffect position="topLeft" size="100px" distance="30px" color="beige">
      <PortfolioItem isOdd>
        <div>
          <HighlightedHeading>ul. Rolna</HighlightedHeading>
          <p>
            Nietuzinkowe mieszkanie, które zarówno na nas jak i na klientach zrobiło ogromne
            wrażenie,
            a wisienką na torcie był przestronny i klimatyczny taras na dachu.
          </p>
        </div>
        <img src={data.rolna3.publicURL} alt="" />
      </PortfolioItem>
    </CornerEffect>
    <CornerEffect position="bottomRight" size="100px" distance="30px" color="beige">
      <PortfolioItem isFullWidth>
        <div>
          <HighlightedHeading>ul. Staszica</HighlightedHeading>
          <p>
            Transakcja wynajmu mieszkania, przy której na naszych oczach zrodziła się piękna
            przyjaźń
            między Wynajmującą - Panią Katarzyną, a Najemczynią - Panią Gosią
          </p>
        </div>
        <img src={data.staszica4.publicURL} alt="" />
      </PortfolioItem>
    </CornerEffect>
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
