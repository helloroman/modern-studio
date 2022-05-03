import React from 'react';
import { graphql } from 'gatsby';
import AreaIcon from 'assets/icons-components/area.svg';
import AvailabilityIcon from 'assets/icons-components/availability.svg';
import OfferTypeIcon from 'assets/icons-components/offer-type.svg';
import RoomsIcon from 'assets/icons-components/rooms.svg';
import BuildingTypeIcon from 'assets/icons-components/building-type.svg';
import {
  Address, ContactDetails,
  Gallery, OfferDescription, OfferDetailsList,
  OfferTitle,
  StyledContentWrapper,
} from 'assets/styles/pages/oferta.styles';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';

const Oferta = ({ data }) => (
  <StyledContentWrapper isSubpage>
    <OfferTitle>
      <Address>Marynarska 21</Address>
      <HighlightedHeading>
        Magiczna przestrzeń dla dużej rodziny
      </HighlightedHeading>
    </OfferTitle>
    {/* TODO: Implement Slick library */}
    <Gallery><img src={data.oferta.publicURL} alt="" /></Gallery>
    <OfferDescription>
      Pomimo braku dostępu do morza w Poznaniu, jak widać za oknem, dla nas nie ma rzeczy
      niemożliwych. Wyjątkowe mieszkanie z widokiem, którego nie da się zapomnieć.
    </OfferDescription>
    <OfferDetailsList>
      <li>
        <BuildingTypeIcon />
        <div>
          <p>Typ budynku:</p>
          <p>blok</p>
        </div>
      </li>
      <li>
        <RoomsIcon />
        <div>
          <p>Pomieszczenia:</p>
          <p>4 pokoje / 2 łazienki</p>
        </div>
      </li>
      <li>
        <AvailabilityIcon />
        <div>
          <p>Dostępność:</p>
          <p>Styczeń 2022</p>
        </div>
      </li>
      <li>
        <AreaIcon />
        <div>
          <p>Powierzchnia:</p>
          <p>95m2</p>
        </div>
      </li>
      <li>
        <OfferTypeIcon />
        <div>
          <p>Rodzaj oferty:</p>
          <p>wynajem</p>
        </div>
      </li>
    </OfferDetailsList>
    <ContactDetails>
      <img src={data.avatar.publicURL} alt="" />
      <div>
        <p>Kontakt:</p>
        <p>Anna Żarczyńska</p>
        <p>ania@msnieruchomosci.pl</p>
        <p>730 026 439</p>
      </div>
    </ContactDetails>
  </StyledContentWrapper>
);

export const query = graphql`
    query {
        oferta: file(relativePath: {regex: "/oferta\/temporary-oferta.jpg/"}) {
            publicURL
        },
        avatar: file(relativePath: {regex: "/oferta\/temporary-avatar.jpg/"}) {
            publicURL
        },
    }`;

export default Oferta;
