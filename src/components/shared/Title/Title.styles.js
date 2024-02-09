import styled from 'styled-components';
// import PropTypes from 'prop-types';

export const StyledTitle = styled.h1`
  font-family: ${props => props.font || props.theme.fonts.main};
  text-align: ${props => props.align || 'center'};
  font-weight: ${props => props.weight || props.theme.fontWeiths.semi}; /*500*/
  font-size: ${props => props.size || props.theme.fontSizes.m}; /*24*/
  line-height: ${props => props.line || '1.172'};
  color: ${props => props.color || props.theme.colors.textColor};
  letter-spacing: ${props => props.letterSpacing || '0.03em'};
  text-transform: ${props => props.textTransform || 'uppercase'};

  @media ${props => props.theme.media.tab} {
    font-size: ${props => props.tabSize || props.theme.fontSizes.l};
  }
`;

// StyledTitle.propTypes = {
//   align: PropTypes.string,
// };
