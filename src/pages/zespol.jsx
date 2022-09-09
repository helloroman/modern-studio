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
        <p>Pośrednik nieruchomości nr licencji 666</p>
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
        <HighlightedHeading>Amanda Grabowska</HighlightedHeading>
        <p>Agent ds. nieruchomości</p>
        <p>
          Z wykształcenia Product & Brand Managerka. Branża nieruchomości od razu okazała się
          zawodowym strzałem w dziesiątkę - połączeniem pasji do pracy z ludźmi i pokarmu dla
          kreatywnej duszy. Zachwyca ją proces, który krok po kroku przechodzi wraz z klientem, a
          każde zlecenie to nowa, fascynująca przygoda, której centrum stanowi człowiek i jego
          marzenie.
        </p>
        <a href={`mailto:${contactData.amanda.email}`}>
          <MailIcon />
          {contactData.amanda.email}
        </a>
        <a href={`tel:${contactData.amanda.phone}`}>
          <PhoneIcon />
          {contactData.amanda.phone}
        </a>
      </InfoItemContent>
      <img src={data.amanda2.publicURL} alt="" />
    </InfoItem>
    <InfoItem>
      <InfoItemContent>
        <HighlightedHeading>Kamila Urbaniak</HighlightedHeading>
        <p>Agent ds. nieruchomości</p>
        <p>
          Od zawsze związana z Poznaniem. Absolwentka UAM na kierunku Fizyka medyczna. Jej domeną
          jest doskonała organizacja i niezawodna pamięć. W branży nieruchomości uwielbia dynamikę i
          nowe wyzwania. Budowanie relacji opartej na zrozumieniu i wzajemnym zaufaniu oraz pełne
          zaangażowanie stanowią równanie, którego wynikiem zawsze jest błysk satysfakcji w oczach
          klienta.
        </p>
        <a href={`mailto:${contactData.kamila.email}`}>
          <MailIcon />
          {contactData.kamila.email}
        </a>
        <a href={`tel:${contactData.kamila.phone}`}>
          <PhoneIcon />
          {contactData.kamila.phone}
        </a>
      </InfoItemContent>
      <img src={data.kamila3.publicURL} alt="" />
    </InfoItem>
    <InfoItem>
      <InfoItemContent>
        <HighlightedHeading>Marta Kucharczyk</HighlightedHeading>
        <p>Agent ds. nieruchomości</p>
        <p>
          Od zawsze związana z Poznaniem. Absolwentka UAM na kierunku Fizyka medyczna. Jej domeną
          jest doskonała organizacja i niezawodna pamięć. W branży nieruchomości uwielbia dynamikę i
          nowe wyzwania. Budowanie relacji opartej na zrozumieniu i wzajemnym zaufaniu oraz pełne
          zaangażowanie stanowią równanie, którego wynikiem zawsze jest błysk satysfakcji w oczach
          klienta.
        </p>
        <a href={`mailto:${contactData.marta.email}`}>
          <MailIcon />
          {contactData.marta.email}
        </a>
        <a href={`tel:${contactData.marta.phone}`}>
          <PhoneIcon />
          {contactData.marta.phone}
        </a>
      </InfoItemContent>
      <img src={data.marta4.publicURL} alt="" />
    </InfoItem>
    <InfoItem>
      <InfoItemContent>
        <HighlightedHeading>Patrycja Biernaczyk</HighlightedHeading>
        <p>Agent ds. nieruchomości</p>
        <p>
          Od zawsze związana z Poznaniem. Absolwentka UAM na kierunku Fizyka medyczna. Jej domeną
          jest doskonała organizacja i niezawodna pamięć. W branży nieruchomości uwielbia dynamikę i
          nowe wyzwania. Budowanie relacji opartej na zrozumieniu i wzajemnym zaufaniu oraz pełne
          zaangażowanie stanowią równanie, którego wynikiem zawsze jest błysk satysfakcji w oczach
          klienta.
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
        amanda2: file(relativePath: {regex: "/zespol\/2_amanda.jpg/"}) {
            publicURL
        },
        kamila3: file(relativePath: {regex: "/zespol\/3_kamila.jpg/"}) {
            publicURL
        },
        marta4: file(relativePath: {regex: "/zespol\/4_marta.jpg/"}) {
            publicURL
        },
        patrycja5: file(relativePath: {regex: "/zespol\/5_patrycja.jpg/"}) {
            publicURL
        },

    }`;

export default Zespol;
