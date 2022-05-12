import { FC, ReactNode } from "react";

import Header from "components/Header/Header";
import { ContainerWrapper, InnerWrapper, Main } from "./container.styles";

interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <ContainerWrapper>
      <InnerWrapper>
        <Header />
        <Main>{children}</Main>
      </InnerWrapper>
    </ContainerWrapper>
  );
};

export default Container;
