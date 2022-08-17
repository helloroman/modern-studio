import React from 'react';
import { graphql } from 'gatsby';
import {
  ContactContentWrapper,
  ContactInfoWrapper,
  ContactPhoto,
} from 'assets/styles/pages/kontakt.styles';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import PhoneIcon from 'assets/icons-components/phone.svg';
import { ContactForm } from 'components/ContactForm/ContactForm';

const Kontakt = ({ data }) => (
  <ContactContentWrapper isSubpage>
    <ContactInfoWrapper>
      <HighlightedHeading>Kontakt</HighlightedHeading>
      <p>
        Szukasz nieruchomości dla siebie? A może potrzebujesz fachowej pomocy przy sprzedaży
        własnej nieruchomości? Chętnie odpowiemy na Twoje pytania. Napisz lub zadzwoń.
      </p>
      <a href="tel:730026439">
        <PhoneIcon />
        730 026 439
      </a>
    </ContactInfoWrapper>
    <ContactForm />
    <ContactPhoto
      color="steel"
      offset="2000"
      position="bottomLeft"
      size="100px"
      distance="30px"
      imageSource={data.hero.publicURL}
    />
  </ContactContentWrapper>
);

export const query = graphql`
    query {
        hero: file(relativePath: {regex: "/kontakt\/0_hero.jpg/"}) {
            publicURL
        },
    }`;

export default Kontakt;
