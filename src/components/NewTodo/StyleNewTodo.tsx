import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Input = styled.input`
  padding: 12px 1rem;
  border-radius: 10px;
  border: 1px solid #fff;
  background: #000;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #00ffc7;
    color: #000;
  }
  &::placeholder {
    font-size: 18px;
  }

  &:focus-visible {
    outline: 0;
  }
`;
export const SubmitButton = styled.button`
  margin: 2rem auto 1rem auto;
  padding: 9px 2rem;
  border-radius: 10px;
  background: #fff;
  font-size: 19px;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);

  &:hover {
    border: 1px solid #fff;
    border-radius: 35px;
    transform: scale(1.3);
    color: greenyellow;
    box-shadow: 0 0 10px 0 #00ffc7 inset, 0 0 10px 4px #00ffc7;
  }
`;

export const Error = styled.p`
  text-align: center;
  font-size: 14px;
  color: #ee5a5a;
`;
