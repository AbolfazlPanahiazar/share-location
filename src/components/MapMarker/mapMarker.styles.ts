import styled from "styled-components";

export const PopupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PopupHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const PopupTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DataLabel = styled.span`
  width: 7rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: blue;
`;

export const DataValue = styled.span`
  font-size: 0.9rem;
  color: gray;
`;

export const LocationLogo = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const EditButton = styled.button`
  border-radius: 5px;
  background-color: green;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
`;
