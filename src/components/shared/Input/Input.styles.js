import styled from 'styled-components';

export const InputSearch = styled.input`
  height: 30px;
  width: 394px;
  background-color: transparent;
  border: transparent;
  border-bottom: solid 1px white;
  color: white;
  font-size: 18px;

  &:focus {
    background-color: transparent;
    outline: 0;
    color: white;
  }

  &::placeholder {
    opacity: 1;
  }
`;
