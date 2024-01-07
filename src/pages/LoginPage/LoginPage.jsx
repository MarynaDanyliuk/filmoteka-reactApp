// import Gallery from 'components/Gallery/Gallery';
// import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';

import css from '../LoginPage/LoginPage.module.css';

const LoginPage = props => {
  console.log(props);
  return (
    <div className={css.section}>
      <div className={css.container}>
        <hi className={css.title}>Login Page</hi>
      </div>
    </div>
  );
};

export default LoginPage;
