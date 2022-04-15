import styled from 'styled-components';
import React from 'react';
import Logo from '../../assets/icons-components/logo.svg';
import { StyledIcon } from '../StyledIcon/StyledIcon';

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 0;
  z-index: 1000;
`;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  div {
    width: 2rem;
    height: 0.15rem;
    background: black;
    position: relative;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  
  ${({ theme }) => theme.mq.desktop} {
    position: static;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: unset;
    background-color: transparent;
    padding: 25px 45px;
  }
`;

export const StyledLogo = styled(({ isMobile, isSmall, ...props }) => <Logo {...props} />)`
  width: ${({ isSmall }) => (isSmall ? '60px' : '100px')};
  
  ${({ theme }) => theme.mq.desktop} {
    display: ${({ isMobile }) => (isMobile ? 'none' : 'initial')};
    
  }
`;

export const StyledSocialIcon = styled(StyledIcon)`
  margin: 0 20px;
  width: 50px;
  height: 50px;
  
  ${({ theme }) => theme.mq.desktop} {
    width: 25px;
    height: 25px;
    margin: 0 15px;
  }
`;

export const StyledNavigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    text-align: center;

    li {
      a {
        display: inline-block;
        padding: 25px;
        font-family: ${({ theme }) => theme.font.family.cormorant};
        color: black;
        text-decoration: none;
        font-size: ${({ theme }) => theme.font.size.mobileMenu};
      }
    }
    
    ${({ theme }) => theme.mq.desktop} {
      li {
        a {
          padding: 0;
        }
      }
    }
  }
  
  ${({ theme }) => theme.mq.desktop} {
    margin-left: auto;
    
    ul {
      display: flex;
      
      li {
        margin: 0 20px;
      }
    }
  }
`;
