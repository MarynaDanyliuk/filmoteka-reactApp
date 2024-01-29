import styled from 'styled-components';
import { baseButtonStyles } from 'components/shared/Button/Button.styles';
import { setWidth } from 'utils/theme';

import { NavLink } from 'react-router-dom';

export const NavLibrary = styled.nav`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 60px;
`;

export const NavLinkBtn = styled(NavLink)`
  ${baseButtonStyles}
  border: ${props => props.theme.colors.borderButton};
  color: ${props => props.theme.colors.primaryColor};
  width: ${setWidth};
  height: 42px;
  border-radius: 8px;

  &:hover,
  &:focus,
  &:active {
    border: ${props => props.theme.colors.borderButtonAct};
    background-color: ${props => props.theme.colors.accentColor};
    color: ${props => props.theme.colors.primaryColor};
  }
`;
