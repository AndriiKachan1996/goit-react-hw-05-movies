import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;

  background-color: #fcf7f5;
  font-family: math;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled(NavLink)`
  padding: 30px;
  text-decoration: none;
  font-weight: 700;
  font-size: 60px;
  color: #fff;
  color: #120cc7;
  text-shadow: 1px 1px 1px #050429, 2px 2px 1px #050429;

  &.active {
    color: #f01896;
  }
  &:hover {
    color: #f01896;
  }
`;

export const MainContainer = styled.main``;
