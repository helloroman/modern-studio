import styled from 'styled-components';

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  
  button {
    margin: 10px 0;
  }
  
  label {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 500;
    margin: 15px 0 0;
  }
  
  input, textarea {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    margin: 5px 0;
    resize: none;
    padding: 5px;
  }
  
  textarea {
    min-height: 200px;
  }
  
  ${({ theme }) => theme.mq.desktop} {
    max-width: 400px;
    margin: 0 auto 100px;
    
    h2 {
      max-width: 300px;
      margin: 30px auto;
    }
  }
`;
