import styled from 'styled-components';

export const StyledModalDetails = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px;
  max-width: 280px;
  @media ${props => props.theme.media.tab} {
    display: flex;
    max-width: 704px;
  }
  @media ${props => props.theme.media.desk} {
    max-width: 806px;
  }
`;

export const MovieImg = styled.img`
  width: 100%;
  max-width: 240px;
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
  width: 100%;
`;

export const TableCategory = styled.td`
  color: #8c8c8c;
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
  gap: 16px;
`;
