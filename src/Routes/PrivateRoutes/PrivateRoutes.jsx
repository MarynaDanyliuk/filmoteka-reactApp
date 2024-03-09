import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from '../../redux/auth/authSelectors';

const PrivateRoute = () => {
  const { isLogin } = useSelector(getAuth);

  if (isLogin) {
    return <Navigate to="/library/watched" />;
  }

  // if (!isLogin && token) {
  //   return <p>...Loading</p>;
  // }

  // if (!isLogin && !token) {
  //   return <Navigate to="/login" />;
  // }

  return <Outlet />;
};

export default PrivateRoute;
