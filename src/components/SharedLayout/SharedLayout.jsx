import { Outlet } from 'react-router-dom';

import { Container } from '../shared/Container/Container';

export const SharedLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
