import * as React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import {
  AdvantagesSection, ContactForm,
  Hero,
  HeroHeading,
  HeroParagraph,
  ReviewsSection,
  ServicesSection,
  ShowcaseGallery,
  ShowcaseImage,
  ShowcaseSection,
  StyledButton, StyledLinkButton,
  StyledList, StyledReview, TeamImage, TeamSection,
  WelcomeSection,
  WelcomeSectionContent,
  WelcomeSectionImage,
} from 'assets/styles/pages/homepage.styles';

const Homepage = ({ data }) => (
  <>
    <Hero imageSource={data.hero.publicURL}>
      <HeroHeading>Biuro nieruchomości, którego potrzebujesz</HeroHeading>
      <HeroParagraph>Sprawdź, co oznacza dla nas bezkonkurencyjność.</HeroParagraph>
    </Hero>
    <ContentWrapper>
      <WelcomeSection>
        <WelcomeSectionContent>
          <h2>
            Obsługę nieruchomości
            wymyśliliśmy na nowo
          </h2>
          <p>
            Modern Studio to nowoczesne biuro nieruchomości z profesjonalnym
            i innowacyjnym podejściem do tematu nieruchomości i inwestycji.
          </p>
          <p>
            Klienci wybierają nas, ponieważ zakres naszych usług wykracza poza to,
            co jest w stanie zaoferować konkurencja.
          </p>
        </WelcomeSectionContent>
        <WelcomeSectionImage imageSource={data.welcome.publicURL} />
      </WelcomeSection>
      <AdvantagesSection>
        <HighlightedHeading>Dlaczego szukasz właśnie nas?</HighlightedHeading>
        <StyledList>
          <li>
            <h3>
              Kompleksowa obsługa
            </h3>
            <p>
              Kupujesz, sprzedajesz lub chcesz wynająć nieruchomość?
              Zajmiemy się Twoją sprawą od A do Z, aby zaoszczędzić Twój czas.
            </p>
          </li>
          <li>
            <h3>
              Agent na wyłączność
            </h3>
            <p>
              W powierzane nam zlecenia angażujemy się w 100% – dzięki nam zaoszczędzisz maksimum
              czasu, zachowując przy tym pełną kontrolę.
            </p>
          </li>
          <li>
            <h3>
              Zgrany zespół
            </h3>
            <p>
              Doskonale rozumiemy Twoje potrzeby. Jesteśmy zespołem o zróżnicowanych kompetencjach,
              dzięki którym świetnie się uzupełniamy
            </p>
          </li>
        </StyledList>
      </AdvantagesSection>
      <ShowcaseSection>
        <h2>Oferta</h2>
        <div>
          <StyledButton isCentered>Bieżące oferty</StyledButton>
          <StyledButton isCentered>Nasze realizacje</StyledButton>
        </div>
        <ShowcaseGallery>
          <ShowcaseImage src={data.grid1.publicURL} alt="#" />
          <ShowcaseImage isBig src={data.grid2.publicURL} alt="#" />
          <ShowcaseImage src={data.grid3.publicURL} alt="#" />
          <ShowcaseImage isBig src={data.grid4.publicURL} alt="#" />
        </ShowcaseGallery>
      </ShowcaseSection>
      <ServicesSection>
        <div>
          <HighlightedHeading>Twój komfort ponad wszystko</HighlightedHeading>
          <StyledLinkButton>Sprawdź pełen zakres naszych usług</StyledLinkButton>
        </div>
        <p>
          To, co dla innych biur nieruchomości wykracza poza zakres usług, dla nas jest standardem.
          Wyróżnia nas bezkompromisowa troska o interes klienta.
        </p>
        <StyledList>
          <li>
            <h3>Pośrednictwo</h3>
            <p>
              Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, zakupie, wynajmie lub
              najmie nieruchomości
            </p>
          </li>
          <li>
            <h3>Doradztwo</h3>
            <p>
              Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi, zapewniamy fachowe
              doradztwo w zakresie kredytowania i ubezpieczeń.
            </p>
          </li>
          <li>
            <h3>Home staging</h3>
            <p>
              Modna i funkcjonalna metamorfoza wnętrza mieszkania, domu czy biura podnosi
              atrakcyjność oferty na rynku.
            </p>
          </li>
          <li>
            <h3>Współpraca z najlepszymi</h3>
            <p>
              Poznański rynek znamy jak własną kieszeń – współpracując z nami wybierasz najlepszych
              deweloperów, prawników i architektów.
            </p>
          </li>
        </StyledList>
      </ServicesSection>
      <TeamSection>
        <div>
          <HighlightedHeading>Poznaj nasz zespół</HighlightedHeading>
          <p>
            Dzięki doskonałej współpracy i przyjacielskiej atmosferze
            udało nam się stworzyć zespół dokosnały.
          </p>
          <StyledLinkButton>Sprawdź, kim jesteśmy</StyledLinkButton>
        </div>
        <TeamImage imageSource={data.team1.publicURL} alt="" />
        <TeamImage imageSource={data.team2.publicURL} alt="" />
      </TeamSection>
      <ReviewsSection>
        <div>
          <HighlightedHeading>
            Co mówią o nas nasi klienci?
          </HighlightedHeading>
          <p>
            Bezkompromisowo wspieramy naszych klientów a ich satysfakcja
            jest dla nas najważniejszym celem.
          </p>
        </div>
        <div>
          <StyledReview>
            <p>
              Udało się znaleźć kupca na nasze mieszkanie w jedne dzień! Cały proces był
              przeprowadzony bardzo sprawnie, profesjonalnie i dla nas jako klientów bezboleśnie.
              Ania ma prawdziwy dar tłumaczenia zawiłości i dopinania detali.
            </p>
            <p>Katarzyna</p>
          </StyledReview>
          <StyledReview>
            <p>
              Współpraca na najwyższym poziomie. Jeśli zależy Wam na szybkiej, bezproblemowej
              sprzedaży czy zakupie mieszkania/ domu to nie ma lepszego miejsca.
            </p>
            <p>Kamila</p>
          </StyledReview>
        </div>
      </ReviewsSection>
      <ContactForm action="#">
        <HighlightedHeading>Napisz do nas</HighlightedHeading>
        <label htmlFor="email">Adres e-mail</label>
        <input type="email" name="email" id="email" placeholder="Adres e-mail" />
        <label htmlFor="message">Treść</label>
        <textarea name="message" id="message" placeholder="Wiadomość" />
        <StyledButton>Wyślij</StyledButton>
      </ContactForm>
    </ContentWrapper>
  </>
);
export const query = graphql`
    query {
        hero: file(relativePath: {regex: "/homepage\/0_hero.jpg/"}) {
            publicURL
        },
        welcome: file(relativePath: {regex: "/homepage\/1_welcome.jpg/"}) {
            publicURL
        },
        grid1: file(relativePath: {regex: "/homepage\/2_grid.jpg/"}) {
            publicURL
        },
        grid2: file(relativePath: {regex: "/homepage\/3_grid.jpg/"}) {
            publicURL
        },
        grid3: file(relativePath: {regex: "/homepage\/4_grid.jpg/"}) {
            publicURL
        },
        grid4: file(relativePath: {regex: "/homepage\/5_grid.jpg/"}) {
            publicURL
        },
        team1: file(relativePath: {regex: "/homepage\/6_team.jpg/"}) {
            publicURL
        },
        team2: file(relativePath: {regex: "/homepage\/7_team.jpg/"}) {
            publicURL
        },
    }`;

export default Homepage;
