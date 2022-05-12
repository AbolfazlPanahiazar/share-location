import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #666;
  border-radius: 5px;
  padding: 0 1rem;
  margin-top: 0.2rem;
`;

export const Navbar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavigationLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0.5rem;
`;

export const TitleWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  font-size: 2rem;
  font-weight: 900;
`;
