import css from '../App/App.module.css';
import React, { lazy, Suspense } from 'react';

import Header from 'components/Header/Header';
// import HomePage from 'pages/HomePage/HomePage';
// import LibraryPage from 'pages/LibraryPage/LibraryPage';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from '../Routes/PublicRoutes/PublicRoutes';
import PrivateRoute from '../Routes/PrivateRoutes/PrivateRoutes';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LibraryPage = lazy(() => import('pages/LibraryPage/LibraryPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/library" element={<LibraryPage />}></Route>
          </Route>
        </Routes>
      </Suspense>
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
