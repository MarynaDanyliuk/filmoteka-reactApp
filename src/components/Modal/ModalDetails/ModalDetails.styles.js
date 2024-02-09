import styled from 'styled-components';

export const StyledModalDetails = styled.div`
  max-height: calc(100vh - 60px);
  overflow-y: auto;

  border-radius: 10px;
  max-width: 280px;

  @media ${props => props.theme.media.tab} {
    display: flex;
    flex-direction: row;
    max-width: 704px;
    height: fit-content;
  }
  @media ${props => props.theme.media.desk} {
    max-width: 806px;
  }
`;

export const MovieWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MovieImg = styled.img`
  width: 100%;
  max-width: 280px;
  height: 357px;
  border-radius: 10px;
  margin-bottom: 16px;
  object-fit: cover;

  @media ${props => props.theme.media.tab} {
    min-width: 264px;
    height: 373px;

    margin-bottom: 0;
    margin-right: 18px;
  }
  @media ${props => props.theme.media.desk} {
    min-width: 375px;
    height: 478px;
  }
`;

export const MovieDescr = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieInfoTable = styled.table`
  margin-bottom: 20px;
  /* width: 100%; */
`;

export const TableCategory = styled.td`
  color: ${props => props.theme.colors.inputText};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeiths.semi};
  line-height: ${props => props.theme.lineHeights.main};
  margin-bottom: 8px;
`;

export const TableData = styled.td`
  vertical-align: middle;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeiths.semi};
  line-height: ${props => props.theme.lineHeights.main};
  margin-bottom: 8px;
`;

export const MovieOvervie = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeiths.semi};
  line-height: ${props => props.theme.lineHeights.main};
  margin-bottom: 8px;
`;

export const ModalNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  max-width: 100%;
`;

// export const ContainerModal = styled.div`
//   /* display: flex;
//   align-items: center;
//   flex-direction: column;

//   width: 100%;
//   height: 95vh;
//   @media ${props => props.theme.media.tab} {
//     height: fit-content;
//   } */
// `;

// export const ContainerView = styled.div`
//   /* width: 100%;
//   height: 95vh;
//   overflow-y: auto;
//   @media ${props => props.theme.media.tab} {
//     height: fit-content;
//     align-items: normal;
//   } */
// `;
