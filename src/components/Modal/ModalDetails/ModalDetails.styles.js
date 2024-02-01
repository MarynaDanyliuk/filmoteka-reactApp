import styled from 'styled-components';

export const StyledModalDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px;
  max-width: 280px;

  width: 100%;
  height: 95vh;

  /* padding: 12px 20px; */

  @media ${props => props.theme.media.phone} {
    /* max-width: 280px; */
  }

  @media ${props => props.theme.media.tab} {
    flex-direction: row;
    max-width: 704px;
    height: fit-content;
  }
`;

export const MovieImg = styled.div``;
