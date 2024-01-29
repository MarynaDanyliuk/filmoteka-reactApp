import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import abstractBackground_1x from '../../images/abstractBackground_1x.jpg';
import abstractBackground_2x from '../../images/abstractBackground_2x.jpg';
import abstractBackground_tab_1x from '../../images/abstractBackground_tab_1x.jpg';
import abstractBackground_tab_2x from '../../images/abstractBackground_tab_2x.jpg';
import abstractBackground_mob_1x from '../../images/abstractBackground_mob_1x.jpg';
import abstractBackground_mob_2x from '../../images/abstractBackground_mob_2x.jpg';

export const HeaderContainer = styled.div`
  padding: 40px 32px 0;
  background-image: url('${abstractBackground_mob_1x}');
  background-position: center;
  background-size: cover;
  @media ${props => props.theme.mediaRetina.retinaSize} {
    background-image: url('${abstractBackground_mob_2x}');
  }

  margin-bottom: 60px;

  @media ${props => props.theme.media.tab} {
    background-image: url('${abstractBackground_tab_1x}');

    @media ${props => props.theme.mediaRetina.retinaSize} {
      background-image: url('${abstractBackground_tab_2x}');
    }
  }

  @media ${props => props.theme.media.desk} {
    background-image: url('${abstractBackground_1x}');

    @media ${props => props.theme.mediaRetina.retinaSize} {
      background-image: url('${abstractBackground_2x}');
    }
  }
`;

export const HeaderNav = styled.div`
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.primaryColor};
  font-weight: ${props => props.theme.fontWeiths.semiBold};
  font-size: ${props => props.theme.fontSizes.m};
  text-transform: uppercase;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: end;
  gap: 30px;
  margin-left: auto;
  @media ${props => props.theme.mediaMax.tab} {
    gap: 20px;
    margin-bottom: 20px;
    display: none;
  }
`;

// export const HeaderListItem = styled.li`
//   color: ${props => props.theme.colors.primaryColor};
//   font-weight: ${props => props.theme.fontWeiths.semiBold};
//   font-size: ${props => props.theme.fontSizes.m};
//   text-transform: uppercase;
// `;

// export const Icon = styled.svg`
//   display: inline-block;
//   width: 1em;
//   height: 1em;
//   stroke-width: 0;
//   stroke: currentColor;
//   fill: currentColor;
//   margin-right: 8px;
// `;

// .icon {
//   display: inline-block;
//   width: 1em;
//   height: 1em;
//   stroke-width: 0;
//   stroke: currentColor;
//   fill: currentColor;
//   margin-right: 8px;
// }

// .nav_item--current::after {
//   content: '';
//   color: #ff001b;
//   right: 0;
//   bottom: -1px;
//   display: block;
//   width: 100%;
//   height: 4px;
//   background-color: currentColor;
//   opacity: 1;
//   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
// }
