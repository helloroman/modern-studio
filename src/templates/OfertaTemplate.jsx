import React from 'react';
import { graphql } from 'gatsby';
import AreaIcon from 'assets/icons-components/area.svg';
import AvailabilityIcon from 'assets/icons-components/availability.svg';
import OfferTypeIcon from 'assets/icons-components/offer-type.svg';
import RoomsIcon from 'assets/icons-components/rooms.svg';
import BuildingTypeIcon from 'assets/icons-components/building-type.svg';
import {
  Address,
  Gallery, OfferDescription, OfferDetailsList,
  OfferTitle,
  StyledContentWrapper,
} from 'assets/styles/pages/oferta.styles';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';

const galleryOptions = {
  showStatus: false,
  showThumbs: false,
  infiniteLoop: true,
};

const OfertaTemplate = ({ data: { oferta, avatar } }) => (
  <StyledContentWrapper isSubpage>
    <OfferTitle>
      <Address>{oferta.adres}</Address>
      <HighlightedHeading>{oferta.tytul}</HighlightedHeading>
    </OfferTitle>
    <Gallery>
      <Carousel {...galleryOptions}>
        {oferta.galeria.map((item) => (
          <img src={item.file.url} key={item.file.url} alt="" />
        ))}
      </Carousel>
    </Gallery>
    <OfferDescription dangerouslySetInnerHTML={{
      __html: oferta.opis.childMarkdownRemark.html,
    }}
    />
    <OfferDetailsList>
      <li>
        <BuildingTypeIcon />
        <div>
          <p>Typ budynku:</p>
          <p>{oferta.typBudynku}</p>
        </div>
      </li>
      <li>
        <RoomsIcon />
        <div>
          <p>Pomieszczenia:</p>
          <p>{oferta.pomieszczenia}</p>
        </div>
      </li>
      <li>
        <AvailabilityIcon />
        <div>
          <p>Dostępność:</p>
          <p>{oferta.dostepnosc}</p>
        </div>
      </li>
      <li>
        <AreaIcon />
        <div>
          <p>Powierzchnia:</p>
          <p>{oferta.powierzchnia}</p>
        </div>
      </li>
      <li>
        <OfferTypeIcon />
        <div>
          <p>Rodzaj oferty:</p>
          <p>{oferta.rodzajOferty}</p>
        </div>
      </li>
    </OfferDetailsList>
    <ContactDetails contact={oferta.kontakt} />
  </StyledContentWrapper>
);

export const query = graphql`
    query {
        oferta: contentfulOferta(id: {eq: "1041d509-8ae6-5f12-a4cc-c99289f775db"}) {
            tytul
            typBudynku
            rodzajOferty
            powierzchnia
            pomieszczenia
            kontakt
            dostepnosc
            opis {
                childMarkdownRemark {
                    html
                }
            }
            galeria {
                file {
                    url
                }
            }
            adres
        },
        avatar: file(relativePath: {regex: "/oferta\/temporary-avatar.jpg/"}) {
            publicURL
        },

    }`;

export default OfertaTemplate;
