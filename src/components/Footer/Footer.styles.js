import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 50px 20px;
  
  h4 {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 600;
    grid-row: 1 / 2;
    margin: 0;
    align-self: center;
  }
  
  div:first-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-column: 1 / 3;
    
    a {
      color: black;
      text-decoration: none;
      margin: 10px 0;
    }
  }
  
  div:last-of-type {
    grid-row: 1 / 2;
    margin-left: auto;
    
    a {
      margin-right: 20px;
      width: 35px;
      height: 35px;
    }
  }
  
  ${({ theme }) => theme.mq.desktop} {
    padding: 100px 100px 60px;
    
    div:first-of-type {
      width: 60%;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
