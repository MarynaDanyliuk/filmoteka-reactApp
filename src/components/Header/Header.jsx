import SearchForm from './SearchForm/SearchForm';
import Icon from '../shared/Icon/Icon';
import NavigationLibrary from './NavigationLibrary/NavigationLibrary';
import {
  HeaderContainer,
  HeaderNav,
  HeaderList,
  StyledNavLink,
} from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <StyledNavLink to="/">
          <Icon id="icon-film" />
          Filmoteka
        </StyledNavLink>
        <HeaderList>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/library/watched">My Library</StyledNavLink>
        </HeaderList>
      </HeaderNav>
      <SearchForm />
      <NavigationLibrary />
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

/* <Icon width="16" height="16">
            <use href={icons + '#icon-film'}></use>
          </Icon> */
// className={css.nav_item}
