import css from '../SearchForm/SearchForm.module.css';
import { Button } from 'components/Button/Button';

const SearchForm = () => {
  return (
    <form className={css.form} id="header-content">
      <input
        type="text"
        id="search-input"
        className={css.search_input}
        name="searchQuery"
        autoComplete="off"
        placeholder="Search films..."
      />
      <Button />
    </form>
  );
};

export default SearchForm;

// _______________
//  className = { getClassName };

//  <button type="submit" className="search-button">
//    <svg className="icon">
//      <use href="./images/icons.svg#icon-search"></use>
//    </svg>
//  </button>;

// import { NavLink } from 'react-router-dom';

// const getClassName = ({ isActive }) => {
//   const className = isActive ? `${css.link} ${css.active}` : css.link;
//   return className;
// };
