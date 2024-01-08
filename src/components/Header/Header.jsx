import css from '../Header/Header.module.css';

import icons from '../../images/icons.svg';

import SearchForm from './SearchForm/SearchForm';

import { NavLink } from 'react-router-dom';
// import HeaderLibraryPage from './HeaderLibraryPage/HeaderLibraryPage';

// const getClassName = ({ isActive }) => {
//   const className = isActive ? `${css.link} ${css.active}` : css.link;
//   return className;
// };

const Header = () => {
  return (
    <div className={css.section}>
      <div className={css.header}>
        <div className={css.container}>
          <div className={css.header_nav}>
            <NavLink to="/" className={css.nav_item}>
              <svg className={css.icon} width="16" height="16">
                <use href={icons + '#icon-film'}></use>
              </svg>
              Filmoteka
            </NavLink>
            <ul className={css.nav_list}>
              <li>
                <NavLink className={css.nav_item} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={css.nav_item} to="/library">
                  My Library
                </NavLink>
              </li>
            </ul>
          </div>

          <SearchForm />
          {/* <HeaderLibraryPage /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

// _________________________________
// style = 'mar gin-right: 8px';
