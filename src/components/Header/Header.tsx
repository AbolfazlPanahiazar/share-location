import { FC } from "react";
import { Link } from "react-router-dom";

import { HeaderWrapper, Navbar, NavigationLink, TitleWrapper, HeaderTitle } from "./header.styles";

const Header: FC = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <HeaderTitle>Share Location</HeaderTitle>
      </TitleWrapper>
      <Navbar>
        <Link to="/">
          <NavigationLink>Home</NavigationLink>
        </Link>
        <Link to="/locations/new">
          <NavigationLink>Add Location</NavigationLink>
        </Link>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
