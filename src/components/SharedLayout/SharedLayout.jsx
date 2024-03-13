import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container } from '../shared/Container/Container';

export const SharedLayout = () => {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
