import styled from 'styled-components';
import { setWidth } from 'utils/theme';

export const baseButtonStyles = `
  text-transform: uppercase;
  cursor: pointer;
  border: transparent;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Btn = styled.button`
  ${baseButtonStyles};
  /* color: ${props => props.theme.colors.primaryColor}; */
  width: ${setWidth};

  color: ${props => {
    switch (props.name) {
      case 'close':
        return props.theme.colors.primaryColor;
      // break;
      case 'search':
        return props.theme.colors.primaryColor;
      case 'submit':
        return props.theme.colors.primaryColor;
      default:
        break;
    }
  }};
`;
