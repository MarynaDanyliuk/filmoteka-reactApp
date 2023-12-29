import css from '../Header/Header.module.css';

import icons from '../../images/icons.svg';

import HeaderHomePage from './HeaderHomePage/HeaderHomePage';
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
            <a href="#/" className={css.nav_item}>
              <svg className={css.icon} width="16" height="16">
                <use href={icons + '#icon-film'}></use>
              </svg>
              Filmoteka
            </a>
            <ul className={css.nav_list}>
              <li>
                <a href="/" className={css.nav_item}>
                  Home
                </a>
              </li>
              <li>
                <a href="/library" className={css.nav_item}>
                  My Library
                </a>
              </li>
            </ul>
          </div>

          <HeaderHomePage />
          {/* <HeaderLibraryPage /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

// _________________________________
// style = 'mar gin-right: 8px';
