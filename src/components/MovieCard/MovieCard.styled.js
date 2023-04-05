import styled from '@emotion/styled';

export const MovieCardWrapp = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;
export const ImageWrapp = styled.div`
  height: 650px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  display: block;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;
export const InfoWrapp = styled.div`
  width: 1500px;
`;

export const MovieName = styled.h1`
  font-weight: 700;
  font-size: 40px;
  text-shadow: 1px 1px 1px #050429, 2px 2px 1px #050429;
  font-family: math;
`;

export const MovieTagLine = styled.p`
  font-family: math;
  font-weight: 700;
  font-size: 35px;

  text-shadow: 1px 0px 0px #050429, 0px 1px 1px #050429;
`;
