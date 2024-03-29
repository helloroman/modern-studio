import React from 'react';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { graphql } from 'gatsby';
import MailIcon from 'assets/icons-components/mail.svg';
import PhoneIcon from 'assets/icons-components/phone.svg';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { Hero, InfoItem, InfoItemContent } from 'assets/styles/pages/zespol.styles';
import { contactData } from 'components/ContactDetails/ContactDetails';

const Zespol = ({ data }) => (
  <ContentWrapper isSubpage>
    <Hero imageSource={data.hero0.publicURL}>
      <h1>Poznajmy się</h1>
      <p>Razem tworzymy wyjątkowy zespół. Zobacz, dlaczego warto z nami współpracować.</p>
    </Hero>
    <InfoItem>
      <InfoItemContent>
        <HighlightedHeading>Anna Żarczyńska</HighlightedHeading>
        <p>Pośrednik nieruchomości nr licencji 26692</p>
        <p>
          Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu.
          Doświadczenie zawodowe zdobywała w poznańskich kancelariach prawnych. Swoją pracę opiera
          na
          przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych wnętrz, niebanalnej
          architektury i sztuki w każdej postaci.
        </p>
        <a href={`mailto:${contactData.anna.email}`}>
          <MailIcon />
          {contactData.anna.email}
        </a>
        <a href={`tel:${contactData.anna.phone}`}>
          <PhoneIcon />
          {contactData.anna.phone}
        </a>
      </InfoItemContent>
      <img src={data.ania1.publicURL} alt="" />
    </InfoItem>
    <InfoItem>
      <InfoItemContent>
        <HighlightedHeading>Patrycja Biernaczyk</HighlightedHeading>
        <p>Pośrednik nieruchomości nr licencji 25941</p>
        <p>
          Absolwentka Uniwersytetu im. Adama Mickiewicza na kierunku etnolingwistyka. Pierwsze
          doświadczenie zawodowe zdobywała w firmach, w których języki, komunikatywność i
          nawiązywanie relacji z klientem odgrywało kluczową rolę. Pasjonatka sportu i
          motoryzacji, podróży, nietuzinkowych wnętrz. Rzetelna, odpowiedzialna i otwarta na
          drugiego człowieka. Zafascynowana nieruchomościami z bogatą historią.
        </p>
        <a href={`mailto:${contactData.patrycja.email}`}>
          <MailIcon />
          {contactData.patrycja.email}
        </a>
        <a href={`tel:${contactData.patrycja.phone}`}>
          <PhoneIcon />
          {contactData.patrycja.phone}
        </a>
      </InfoItemContent>
      <img src={data.patrycja5.publicURL} alt="" />
    </InfoItem>
  </ContentWrapper>
);

export const query = graphql`
    query {
        hero0: file(relativePath: {regex: "/zespol\/0_hero.jpg/"}) {
            publicURL
        },
        ania1: file(relativePath: {regex: "/zespol\/1_ania.jpg/"}) {
            publicURL
        },
        patrycja5: file(relativePath: {regex: "/zespol\/5_patrycja.jpg/"}) {
            publicURL
        },
    }`;

export default Zespol;
