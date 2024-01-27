import styled from 'styled-components';
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
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${abstractBackground_mob_2x}');
  }

  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    background-image: url('${abstractBackground_tab_1x}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${abstractBackground_tab_2x}');
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url('${abstractBackground_1x}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${abstractBackground_2x}');
    }
  }
`;

export const HeaderNav = styled.div`
  display: flex;
`;

export const HeaderList = styled.ul`
  display: flex;
  justify-content: end;
  gap: 30px;
  margin-left: auto;
  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 20px;
  }
`;

export const HeaderListItem = styled.li`
  color: white;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  margin-right: 8px;
`;

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
