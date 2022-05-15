import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3px;
`;

export const InputLabel = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
`;

export const Section = styled.section`
  width: 100%;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: gray;
  color: black;
`;

export const SelectedImage = styled.img`
  max-height: 100px;
  border-radius: 10px;
  object-fit: cover;
`;
