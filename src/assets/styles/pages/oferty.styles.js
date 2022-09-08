import styled from 'styled-components';

export const IntroSection = styled.section`
  ${({ theme }) => theme.mq.desktop} {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 40px;
  }
`;

export const FiltersList = styled.ul`
  margin: 0 0 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  align-items: flex-start;
  
  li {
    padding: 10px 0;
    font-weight: 700;
  }
  
  // TODO: remove after implementing state
  li:first-child {
    text-decoration: underline;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    li {
      padding: 20px 35px;
    }
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  
  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.mq.huge} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EmptyState = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 500px;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.beige};
  
  h2 {
    font-size: 3rem;
    margin: 0;
  }
  
  h3 {
    margin: 10px 0;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }
`;
