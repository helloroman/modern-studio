import React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { FiltersList, Gallery, IntroSection } from 'assets/styles/pages/oferty.styles';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

const Oferty = ({ data: { oferty: { nodes: oferty } } }) => (
  <ContentWrapper isSubpage>
    <IntroSection>
      <HighlightedHeading>Nasza oferta</HighlightedHeading>
      <p>
        Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz typ nieruchomości, który Cię
        interesuje.
      </p>
    </IntroSection>
    <FiltersList>
      <li>Mieszkanie</li>
      <li>Dom</li>
      <li>Działka</li>
    </FiltersList>
    <Gallery>
      {oferty.map((oferta) => (
        <Thumbnail
          key={oferta.id}
          imageSource={oferta.galeria[0].file.url}
          address={oferta.adres}
          title={oferta.tytul}
        />
      ))}
    </Gallery>
  </ContentWrapper>
);

export const query = graphql`
    query {
        oferty: allContentfulOferta {
            nodes {
                id
                adres
                tytul
                galeria {
                    file {
                        url
                    }
                }
            }
        }
    }`;

export default Oferty;
