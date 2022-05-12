import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #aaa;
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;
