import css from '../App/App.module.css';

import Header from 'components/Header/Header';
import HomePage from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <div className={css.container}>
      <Header />
      <HomePage />
    </div>
  );
};

// _________________________________
// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101',
// }}
