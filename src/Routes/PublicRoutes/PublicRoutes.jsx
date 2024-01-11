import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { getAuth } from '../../redux/auth/auth-selectors';

const PublicRoute = () => {
  return <Navigate to="/" />;
  //   const { isLogin, token } = useSelector(getAuth);

  //   if (!isLogin && token) {
  //     return <p>...Loading</p>;
  //   }

  //   if (!isLogin && !token) {
  //     return <Navigate to="/login" />;
  //   }

  //   return <Outlet />;
};

export default PublicRoute;
