import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: cyan;
  display: flex;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  width: 100vw;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  width: 100%;
  flex-grow: 1;
`;
