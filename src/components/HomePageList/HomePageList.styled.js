import styled from '@emotion/styled';

export const ListWrapp = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  /* gap: 10px; */
  margin: -10px;
`;

export const ListItemCard = styled.li`
  flex-basis: calc((100% - 2 * 100px) / 10);
  background-color: #607d8b;
  margin: 10px;
`;

export const Title = styled.p`
  text-decoration: none;
  color: #fff;
  padding: 5px;
  text-align: center;
  &:hover {
    color: yellow;
  }
`;
