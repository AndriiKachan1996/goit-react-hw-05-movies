import styled from '@emotion/styled';

export const ListWrapp = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: -20px;
`;

export const ListItemCard = styled.li`
  flex-basis: calc((100% - 2 * 80px) / 4);

  background-color: white;
  margin: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
