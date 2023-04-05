import styled from '@emotion/styled';

export const Form = styled.form`
  width: 750px;
  height: 50px;

  margin: auto;
  display: flex;
  gap: 10px;
  align-content: center;
  justify-content: space-between;
  padding: 10px;

  border-radius: 10px;
  font-size: 20px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const Input = styled.input`
  flex-grow: 1;
  border-radius: 25px;
  border: 2px solid #757575;
  padding: 5px;
  font-size: 28px;
  outline: none;
`;

export const Button = styled.button`
  width: 150px;
  border-radius: 25px;
  border: 2px solid #757575;
  cursor: pointer;

  color: #120cc7;
  font-size: 22px;
  font-weight: 700;
  font-family: math;
  &:hover {
    color: #f01896;
  }
`;
