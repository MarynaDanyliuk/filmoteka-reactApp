import styled from 'styled-components';

export const StyledGallery = styled.ul`
  width: 100%;
  display: grid;
  /* padding: 0 20px; */
  /* justify-content: center; */
  grid-gap: 16px;

  @media ${props => props.theme.media.tab} {
    grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
    grid-gap: 32px 16px;
    /* padding: 0 32px; */
  }

  ${props => props.theme.media.desk} {
    grid-template-columns: repeat(auto-fit, minmax(394px, 1fr));
  }
`;
