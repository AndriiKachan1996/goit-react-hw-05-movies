import styled from '@emotion/styled';

export const ItemWrapp = styled.div`
  &:hover {
    scale: 1.02;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;

export const Thumb = styled.div`
  width: 100%;
  height: 600px;
`;

export const P = styled.p`
  text-decoration: none;

  padding: 5px;
  text-align: center;
  text-align: center;
  font-family: math;
  font-size: 30px;

  text-shadow: 1px 0px 0px #050429, 1px 1px 1px #050429;
  color: black;
  &:hover {
    color: #f01896;
  }
`;
