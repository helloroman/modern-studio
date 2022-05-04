import React, { useState } from 'react';
import { Link } from 'gatsby';
import FacebookIcon from 'assets/icons-components/facebook.svg';
import InstagramIcon from 'assets/icons-components/instagram.svg';
import {
  OuterWrapper,
  StyledBurger,
  StyledLogo,
  StyledNavigation, StyledSocialIcon,
  Wrapper,
} from './Navigation.styles';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OuterWrapper>
      <Link to="/">
        <StyledLogo isSmall isMobile />
      </Link>
      <StyledBurger onClick={toggleNavigation}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <Link to="/">
          <StyledLogo />
        </Link>
        <StyledNavigation>
          <ul>
            <li><Link onClick={toggleNavigation} to="/oferty">Oferty</Link></li>
            <li><Link onClick={toggleNavigation} to="/realizacje">Realizacje</Link></li>
            <li><Link onClick={toggleNavigation} to="/zespol">Zespół</Link></li>
            <li><Link onClick={toggleNavigation} to="/uslugi">Usługi</Link></li>
            <li><Link onClick={toggleNavigation} to="/kontakt">Kontakt</Link></li>
          </ul>
        </StyledNavigation>
        <div>
          <StyledSocialIcon isDark>
            <FacebookIcon />
          </StyledSocialIcon>
          <StyledSocialIcon isDark>
            <InstagramIcon />
          </StyledSocialIcon>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};
