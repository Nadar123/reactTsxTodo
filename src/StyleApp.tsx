import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: #2a2828;
  border: 1px solid #fff;
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem auto;
  width: 60%;
  min-height: 60vh;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const AppContent = styled.div`
  width: 80%;
  margin: auto;
`;
