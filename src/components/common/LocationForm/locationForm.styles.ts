import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
