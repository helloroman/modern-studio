import React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { FiltersList, Gallery, IntroSection } from 'assets/styles/pages/oferty.styles';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

const Oferty = ({ data }) => (
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
      <Thumbnail imageSource={data.thumbnail.publicURL} />
      <Thumbnail imageSource={data.thumbnail.publicURL} />
      <Thumbnail imageSource={data.thumbnail.publicURL} />
      <Thumbnail imageSource={data.thumbnail.publicURL} />
      <Thumbnail imageSource={data.thumbnail.publicURL} />
    </Gallery>
  </ContentWrapper>
);

export const query = graphql`
    query {
        thumbnail: file(relativePath: {regex: "/oferty\/temporary-thumbnail.jpg/"}) {
            publicURL
        },
    }`;

export default Oferty;
