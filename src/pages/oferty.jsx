import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 30vw;
  min-height: 450px;
  max-height: 600px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left bottom;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ThumbnailInfo = styled.div`
  width: 100%;
  padding: 20px;
  
  p:first-child {
    font-size: ${({ theme }) => theme.font.size.thumbnailSmall};
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    position: relative;
  }
  
  p:first-child::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 1px;
    background-color: white;
    bottom: -10px;
    left: 0;
  }
  
  p:last-child {
    font-size: ${({ theme }) => theme.font.size.thumbnail};
    font-weight: 700;
    color: white;
  }
`;

export const Thumbnail = ({ imageSource }) => (
  <ThumbnailWrapper>
    <ThumbnailImage src={imageSource} alt="" />
    <ThumbnailInfo>
      <p>Rolna 20</p>
      <p>Nowoczesny apartament z klasą</p>
    </ThumbnailInfo>
  </ThumbnailWrapper>
);

// TODO: Find perfect name 😂
const Welcome = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 40px;
  }
`;

const FiltersList = styled.ul`
  margin: 0 0 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  align-items: flex-start;
  
  li {
    padding: 10px 0;
    font-weight: 700;
  }
  
  // TODO: remove after implementing state
  li:first-child {
    text-decoration: underline;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    li {
      padding: 20px 35px;
    }
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  
  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.mq.huge} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Oferty = ({ data }) => (
  <ContentWrapper isSubpage>
    <Welcome>
      <HighlightedHeading>Nasza oferta</HighlightedHeading>
      <p>
        Nieustannie poszukujemy nowych ofert nieruchomości. Wybierz typ nieruchomości, który Cię
        interesuje.
      </p>
    </Welcome>
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
