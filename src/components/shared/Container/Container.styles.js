import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 0 20px;
  margin-bottom: 40px;
  width: 100%;

  /* @media ${props => props.theme.media.phone} {
    max-width: 480px;
  } */
  @media ${props => props.theme.media.tab} {
    margin-bottom: 60px;
    padding: 0 32px;
    /* max-width: 100%; */
  }
`;
