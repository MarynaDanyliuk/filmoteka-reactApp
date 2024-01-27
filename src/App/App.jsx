import css from '../App/App.module.css';

// import { GlobalStyle } from './App.styles';

import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LibraryPage = lazy(() => import('../pages/LibraryPage/LibraryPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

// import HomePage from 'pages/HomePage/HomePage';
// import LibraryPage from 'pages/LibraryPage/LibraryPage';

// import PublicRoute from '../Routes/PublicRoutes/PublicRoutes';
// import PrivateRoute from '../Routes/PrivateRoutes/PrivateRoutes';
// _______________________________________________________________________
// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

/* <Suspense>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/library" element={<LibraryPage />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense> */

// _________________________________
// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101',
// }}
