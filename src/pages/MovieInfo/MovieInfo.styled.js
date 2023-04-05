import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const InfoList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const MovieItem = styled.li`
  border: 1px solid grey;
  border-radius: 30px;
  padding: 10px 60px;
  background-color: #fcf7f5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:hover {
  }
  cursor: pointer;
`;

export const InfoLink = styled(NavLink)`
  font-size: 40px;
  font-family: math;

  &.active,
  :hover {
    color: #f01896;
  }
`;
export const InfoContainer = styled.div`
  margin-top: 40px;
`;
export const BackLink = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  display: block;
  margin-top: 20px;
  font-size: 30px;

  &:hover {
    color: #f01896;
  }
`;

export const InfoTitle = styled.h3`
  font-size: 50px;
  text-align: center;
  text-shadow: 1px 0px 0px #050429, 0px 1px 1px #050429;

  font-family: math;
  margin: 30px 0;
`;
