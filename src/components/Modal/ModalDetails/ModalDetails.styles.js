import styled from 'styled-components';

export const StyledModalDetails = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px;
  max-width: 280px;

  @media ${props => props.theme.media.phone} {
  }

  @media ${props => props.theme.media.tab} {
    flex-direction: row;
    max-width: 704px;
    height: fit-content;
  }
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

  /* align-content: stretch; */
`;

export const MovieInfoTable = styled.table`
  margin-bottom: 20px;
  width: 100%;
  /* height: 100%; */
  /* height: 120px; */
`;

export const TableCategory = styled.td`
  color: #8c8c8c;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeiths.semi};
  line-height: 1.67;
  margin-bottom: 8px;
`;

export const TableData = styled.td`
  vertical-align: middle;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeiths.semi};
  line-height: 1.67;
  margin-bottom: 8px;
`;

export const MovieOvervie = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeiths.semi};
  line-height: 1.67;
  margin-bottom: 8px;
`;
