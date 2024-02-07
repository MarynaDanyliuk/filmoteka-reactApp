import styled from 'styled-components';
import { setWidth, setHeight } from 'utils/theme';

export const baseButtonStyles = `
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Btn = styled.button`
  ${baseButtonStyles};
  border: ${props => {
    switch (props.name) {
      case 'modalNav':
        return props.theme.colors.borderButtonBlack;
      default:
        return props.theme.colors.buttonOutline;
    }
  }};
  width: ${setWidth};
  height: ${setHeight};
  color: ${props => {
    switch (props.name) {
      case 'modalNav':
        return props.theme.colors.buttonColor;
      default:
        return props.theme.colors.primaryColor;
    }
  }};

  &:focus,
  &:hover,
  &:active {
    border: ${props => props.theme.colors.buttonOutline};
    color: ${props => props.theme.colors.primaryColor};
    background-color: ${props => {
      switch (props.name) {
        case 'search':
          return props.theme.colors.backgroundModal;
        default:
          return props.theme.colors.accentColor;
      }
    }};
  }
  &::placeholder {
    opacity: 1;
  }
`;
