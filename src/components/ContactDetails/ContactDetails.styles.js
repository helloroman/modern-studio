import styled from 'styled-components';

export const ContactDetailsWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  
  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 50px;
    object-fit: cover;
  }
  
  p {
    margin: 0;
  }
  
  p:first-child {
    font-weight: bold;
  }
`;
