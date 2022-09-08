import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin-top: 130px;
  padding: 0 20px;
  
  ${({ theme }) => theme.mq.desktop} {
    max-width: 1920px;
    margin: 180px auto 0 auto;
    padding: 0 100px;
  }
`;
