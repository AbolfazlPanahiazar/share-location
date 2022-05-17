import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #767676;
  padding: 0 1rem;
  margin: 0.2rem 0;
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export const Navbar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavigationLink = styled.span`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0.5rem;
  color: #e3e3e3;
  transition: all ease-in-out 0.2s;
  &:hover {
    color: #888;
  }
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

export const TitleWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #e3e3e3;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
