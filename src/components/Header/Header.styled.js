import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #171616;
  display: flex;
  padding: 30px;
  padding: 50px 150px;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 50px;
`;

export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const HeaderItem = styled.li`
  font-size: 62px;
  color: #7ffc03;
  &:not(:last-child) {
    margin-right: 150px;
  }
  font-family: cursive;
`;

export const Nav = styled(NavLink)`
  font-size: 62px;
  color: #7ffc03;
  &:not(:last-child) {
    margin-right: 150px;
  }
  font-family: cursive;
`;
