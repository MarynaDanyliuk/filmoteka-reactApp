import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
// import { useState } from 'react';

// import { useDispatch } from 'react-redux';

import { StyledForm, StyledField } from './SearchForm.styles';

// import { Form } from './SearchForm.styles';
import { Button } from 'components/shared/Button/Button';
// import Input from 'components/shared/Input/Input';
import Icon from 'components/shared/Icon/Icon';

// import { search } from '../../../../redux/auth/moviesOperations';

const schema = Yup.object().shape({
  query: Yup.string(),
});
const initialValues = { query: '' };

const SearchForm = () => {
  // const [query, setQuery] = useState('');
  // const [items, setItems] = useState([]);
  // const [page, setPage] = useState(1);
  // ______________________________________
  // const dispatch = useDispatch();

  const handleSubmit = (query, { resetForm }) => {
    console.log(query);

    // dispatch(movies(query));
    resetForm();
  };

  // const handleChange = event => {
  //   setQuery(event.target.value);
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledField type="text" name="query" placeholder="Search films..." />
        <ErrorMessage name="query" />
        <Button
          name="search"
          type="submit"
          // onClick={search}
          style={{
            borderBottom: '1px solid white',
            borderRadius: 0,
            maxWidth: '32px',
          }}
        >
          <Icon id="icon-search" />
        </Button>
      </StyledForm>
    </Formik>
    // <Form w="100%" onSubmit={handleSubmit}>
    //   <Input
    //     type="text"
    //     placeholder="Search films..."
    //     onChange={handleChange}
    //     value={query}
    //   />
    //   <Button
    //     name="search"
    //     type="submit"
    //     // onClick={search}
    //     style={{
    //       borderBottom: '1px solid white',
    //       borderRadius: 0,
    //       maxWidth: '32px',
    //     }}
    //   >
    //     <Icon id="icon-search" />
    //   </Button>
    // </Form>
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
