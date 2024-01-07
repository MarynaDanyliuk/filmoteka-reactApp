import css from '../NavigationLibrary/NavigationLibrary.module.css';

// import { NavLink } from 'react-router-dom';

// const getClassName = ({ isActive }) => {
//   const className = isActive ? `${css.link} ${css.active}` : css.link;
//   return className;
// };

const NavigationLibrary = () => {
  return (
    <div>
      <ul className={css.nav_list_button}>
        <li>
          <button id="watched" type="submit" className={css.btn_header}>
            Watched
          </button>
        </li>
        <li>
          <button id="queue" type="submit" className={css.btn_header}>
            QUEUE
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationLibrary;

// className={css.nav_button}
// className={css.nav_button}
