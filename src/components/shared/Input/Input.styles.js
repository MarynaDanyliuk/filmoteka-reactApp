import styled from 'styled-components';

export const StyledInput = styled.input`
  height: ${props => props.h || 40}px;
  width: 394px;
  background-color: ${props => props.theme.colors.backgroundModal};
  border: ${props => props.theme.colors.inputOutline};
  border-bottom: ${props => props.theme.colors.inputBorder};
  color: ${props => props.theme.colors.primaryColor};
  font-size: ${props => props.theme.fontSizes.s};

  &:focus {
    background-color: ${props => props.theme.colors.backgroundModal};
    outline: 0;
    color: ${props => props.theme.colors.primaryColor};
  }

  &::placeholder {
    opacity: 1;
  }
`;
