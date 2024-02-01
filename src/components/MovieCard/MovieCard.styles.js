import styled from 'styled-components';

export const StyledMovieCard = styled.li`
  display: flex;
  justify-content: center;

  transition: transform 400ms easy-out;
  &:hover {
    transform: scale(1.07);
  }
`;

export const MovieImg = styled.img`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  border-radius: 10px;
  width: 280px;
  height: 402px;
  object-fit: cover;

  @media ${props => props.theme.media.tab} {
    width: 336px;
    height: 455px;
  }
  @media ${props => props.theme.media.desk} {
    width: 394px;
    height: 574px;
  }
`;

export const Title = styled.h2``;

export const Description = styled.div`
  display: flex;
  font-size: 20px;
  line-height: 24px;
  color: #ff6b08;
  align-items: baseline;
`;


// export const CardLink = styled.a`
//   /* max-width: 280px; */

//   @media screen and (min-width: $widthTablet) {
//     /* max-width: 335px; */
//   }
//   @media screen and (min-width: ($widthDesktop)) {
//     /* max-width: 394px; */
//   }
// `;
