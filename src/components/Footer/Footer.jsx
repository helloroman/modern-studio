import React from 'react';
import { Link } from 'gatsby';
import FacebookIcon from 'assets/icons-components/facebook.svg';
import InstagramIcon from 'assets/icons-components/instagram.svg';
import { StyledFooter } from './Footer.styles';
import { StyledIcon } from '../StyledIcon/StyledIcon';

export const Footer = () => (
  <StyledFooter>
    <h4>Modern Studio</h4>
    <div>
      <Link to="/oferty">Oferty</Link>
      <Link to="/realizacje">Realizacje</Link>
      <Link to="/zespol">Zespół</Link>
      <Link to="/uslugi">Usługi</Link>
      <Link to="/kontakt">Kontakt</Link>
    </div>
    <div>
      <StyledIcon as="a" href="https://www.facebook.com/modernstudiopl" target="_blank" isDark>
        <FacebookIcon />
      </StyledIcon>
      <StyledIcon as="a" href="https://www.instagram.com/modernstudiopl/" target="_blank" isDark>
        <InstagramIcon />
      </StyledIcon>
    </div>
  </StyledFooter>
);
