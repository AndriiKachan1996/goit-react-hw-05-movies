import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Nav, NavItem } from './SharedLayout.styled';
import { Container } from 'components/common.styled';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <Container>
      <Header>
        <Nav>
          <NavItem to="/" state={{ from: location }}>
            🏠 Home
          </NavItem>
          <NavItem to="/movies" state={{ from: location }}>
            📽️ Movies
          </NavItem>
        </Nav>
      </Header>
      <Suspense fallback={<>Loading...</>}>
        <>
          <Outlet />
        </>
      </Suspense>
    </Container>
  );
};

export default SharedLayout;