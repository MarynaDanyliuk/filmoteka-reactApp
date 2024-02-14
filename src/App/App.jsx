import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Theme } from '../utils/theme';

import { Header } from '../components/Header/Header';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';

import PrivateRoute from '../Routes/PrivateRoutes/PrivateRoutes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const LibraryPage = lazy(() => import('../pages/LibraryPage/LibraryPage'));
const LibraryWatched = lazy(() =>
  import('../pages/LibraryWatched/LibraryWatched')
);
const LibraryQueue = lazy(() => import('../pages/LibraryQueue/LibraryQueue'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Theme>
      <Header />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/library"
            element={
              <PrivateRoute
                redirectTo="/library/watched"
                component={<LibraryWatched />}
              />
            }
          />
          <Route path="/library/watched" element={<LibraryWatched />} />
          <Route path="/library/queue" element={<LibraryQueue />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Theme>
  );
};

/* <Route
            path="/library"
            element={
              <PrivateRoute
                redirectTo="/library/watched"
                component={<LibraryWatched />}
              />
            }
          /> */

/* <Route path="/library" element={<PrivateRoute />}> */

/* <Route path="/library" element={<LibraryPage />}></Route>
            <Route path="/library/watched" element={<LibraryWatched />} />
            <Route path="/library/queue" element={<LibraryQueue />} /> */

/* </Route> */

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />}>
//           <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="products" element={<Products />} />
//         <Route path="products/:productId" element={<ProductDetails />} />
//       </Route>
//     </Routes>
//   );
// };

/* <Route path="/library" element={<LibraryPage />} /> */

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
