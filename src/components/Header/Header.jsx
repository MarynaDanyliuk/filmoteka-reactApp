import css from '../Header/Header.module.css';

// import icons from '../../images/icons.svg';

import { NavLink } from 'react-router-dom';

import SearchForm from './SearchForm/SearchForm';
import Icon from '../shared/Icon/Icon';
// import NavigationLibrary from './NavigationLibrary/NavigationLibrary';
import {
  HeaderContainer,
  HeaderNav,
  HeaderList,
  HeaderListItem,
} from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <NavLink to="/" className={css.nav_item}>
          <Icon id="icon-film" />
          {/* <Icon width="16" height="16">
            <use href={icons + '#icon-film'}></use>
          </Icon> */}
          Filmoteka
        </NavLink>
        <HeaderList>
          <HeaderListItem>
            <NavLink to="/">Home</NavLink>
          </HeaderListItem>
          <HeaderListItem>
            <NavLink to="/library">My Library</NavLink>
          </HeaderListItem>
        </HeaderList>
      </HeaderNav>
      <SearchForm />
      {/* <NavigationLibrary /> */}
    </HeaderContainer>
  );
};

export default Header;

// _________________________________
// style = 'mar gin-right: 8px';
// const getClassName = ({ isActive }) => {
//   const className = isActive ? `${css.link} ${css.active}` : css.link;
//   return className;
// };
