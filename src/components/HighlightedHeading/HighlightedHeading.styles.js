import styled from 'styled-components';

export const StyledHeading = styled.div`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  position: relative;

  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    height: calc(${({ theme }) => theme.font.size.headingSmall} * 1.5);
    top: calc(-${({ theme }) => theme.font.size.headingSmall} / 6);
    left: -50%;
    background-color: ${({ theme }) => theme.color.beige};
  }
  
  ${({ theme }) => theme.mq.desktop} {
    &::before {
      width: 50%;
      height: calc(${({ theme }) => theme.font.size.headingSmall} * 1.5);
      top: calc(-${({ theme }) => theme.font.size.headingSmall} / 6);
      left: -5%;
      background-color: ${({ theme }) => theme.color.beige};
    }
  }
`;
