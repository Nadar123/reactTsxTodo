import styled from "styled-components";

export const Item = styled.li`
  background: #303234;
  border: 6px solid transparent;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    border: 6px solid #00b3ff52;
    border-radius: 10px;
    color: #000;
  }
`;
export const RemoveItem = styled.span`
  font-size: 14px;
  line-height: 25px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    color: red;
    transform: rotate(360deg);
  }
`;
