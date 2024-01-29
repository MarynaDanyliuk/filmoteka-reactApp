import { Form } from './SearchForm.styles';
import { Button } from 'components/shared/Button/Button';
import Input from 'components/shared/Input/Input';
import Icon from 'components/shared/Icon/Icon';

const SearchForm = ({ search }) => {
  return (
    <Form $w="100%">
      <Input type="text" placeholder="Search films..." />
      <Button
        type="submit"
        onClick={search}
        $w="100%"
        style={{
          maxWidth: '32px',
          borderBottom: '1px solid white',
        }}
      >
        <Icon id="icon-search" />
      </Button>
    </Form>
  );
};

export default SearchForm;

// import css from '../SearchForm/SearchForm.module.css';

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

/* <input
        type="text"
        id="search-input"
        className={css.search_input}
        name="searchQuery"
        autoComplete="off"
        placeholder="Search films..."
      /> */
