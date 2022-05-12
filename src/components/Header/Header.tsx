import { FC } from "react";

import { HeaderWrapper, Navbar, NavigationLink, TitleWrapper, HeaderTitle } from "./header.styles";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <HeaderTitle>Share Location</HeaderTitle>
      </TitleWrapper>
      <Navbar>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/">Add Location</NavigationLink>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
