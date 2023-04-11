import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import {
  AdvantagesSection,
  Hero,
  HeroHeading, HeroImage,
  ReviewsSection,
  ServicesSection, ShowcaseCorner,
  ShowcaseGallery,
  ShowcaseImage,
  ShowcaseSection,
  StyledButton, StyledLinkButton,
  StyledReview, TeamImage, TeamSection,
  WelcomeSection,
  WelcomeSectionContent,
  WelcomeSectionImage,
} from 'assets/styles/pages/homepage.styles';
import { StyledList } from 'components/StyledList/StyledList.styles';
import { ContactForm } from '../components/ContactForm/ContactForm';

const Homepage = ({ data }) => (
  <ContentWrapper>
    <Hero>
      <HeroHeading position="bottomLeft" color="dark" size="100px" distance="30px">
        <h1>Biuro nieruchomości, którego potrzebujesz</h1>
        <p>Sprawdź, co oznacza dla nas bezkonkurencyjność.</p>
      </HeroHeading>
      <HeroImage imageSource={data.hero.publicURL} />
    </Hero>
    <WelcomeSection>
      <WelcomeSectionContent position="topRight" size="100px" distance="30px" offset="600">
        <h2>
          Obsługę nieruchomości
          wymyśliłyśmy na nowo
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
      <WelcomeSectionImage position="bottomLeft" color="beige" size="100px" distance="30px" imageSource={data.welcome.publicURL} />
    </WelcomeSection>
    <AdvantagesSection>
      <HighlightedHeading width="50" isRight>Dlaczego szukasz właśnie nas?</HighlightedHeading>
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
            dzięki którym świetnie się uzupełniamy.
          </p>
        </li>
      </StyledList>
    </AdvantagesSection>
    <ShowcaseSection>
      <h2>Oferta</h2>
      <div>
        <StyledButton as={Link} to="/oferty" isCentered>Bieżące oferty</StyledButton>
        <StyledButton as={Link} to="/realizacje" isCentered>Nasze realizacje</StyledButton>
      </div>
      <ShowcaseGallery>
        <ShowcaseImage src={data.grid1.publicURL} alt="#" />
        <ShowcaseImage isBig src={data.grid2.publicURL} alt="#" />
        <ShowcaseImage src={data.grid3.publicURL} alt="#" />
        <ShowcaseImage isBig src={data.grid4.publicURL} alt="#" />
        <ShowcaseCorner position="bottomLeft" size="100px" distance="30px" color="beige" />
        <ShowcaseCorner position="topRight" size="100px" distance="30px" color="dark" />
      </ShowcaseGallery>
    </ShowcaseSection>
    <ServicesSection>
      <div>
        <HighlightedHeading width="55">Twój komfort ponad wszystko</HighlightedHeading>
        <StyledLinkButton as={Link} to="/uslugi">Sprawdź pełen zakres naszych usług</StyledLinkButton>
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
            najmie nieruchomości.
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
        <HighlightedHeading isRight width="70">Poznaj nasz zespół</HighlightedHeading>
        <p>
          Dzięki doskonałej współpracy i przyjacielskiej atmosferze
          udało nam się stworzyć zespół dokosnały.
        </p>
        <StyledLinkButton as={Link} to="/zespol">Sprawdź, kim jesteśmy</StyledLinkButton>
      </div>
      <TeamImage offset="700" position="bottomLeft" size="70px" distance="20px" color="beige" imageSource={data.team1.publicURL} alt="" />
      <TeamImage position="topRight" size="100px" distance="30px" color="dark" imageSource={data.team2.publicURL} alt="" />
    </TeamSection>
    <ReviewsSection>
      <div>
        <HighlightedHeading width="70">
          Co mówią o nas nasi klienci?
        </HighlightedHeading>
        <p>
          Bezkompromisowo wspieramy naszych klientów, a ich satysfakcja
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
    <ContactForm />
  </ContentWrapper>
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
