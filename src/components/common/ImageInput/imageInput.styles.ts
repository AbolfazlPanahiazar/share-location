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
  color: #e3e3e3;
`;

export const Section = styled.section`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #767676;
  background-color: #1a1a1a;
  color: #858585;
  cursor: pointer;
  padding: 1rem;
  text-align: center;
`;

export const SelectedImage = styled.img`
  max-height: 100px;
  border-radius: 3px;
  object-fit: cover;
`;
