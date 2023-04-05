import styled from '@emotion/styled';

export const CastItemdWrapp = styled.li`
  background-color: #fcf7f5;
  font-family: math;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  flex-basis: Calc((100% - 5 * 10px) / 6);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  &:hover {
    scale: 1.04;
  }
`;

export const CastBox = styled.div`
  height: 350px;
  width: 100%;
`;

export const CastImage = styled.img`
  height: 100%;
  object-fit: cover;
`;
export const CastName = styled.p`
  font-size: 28px;
  font-weight: 700;
  padding-top: 10px;
  margin: 0;
  font-family: math;
  text-align: center;
`;
export const CastCharacter = styled.p`
  font-size: 22px;

  margin: 0;

  text-align: center;
`;

export const CastDesc = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: math;
`;
