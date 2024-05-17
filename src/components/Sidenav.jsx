import React from "react";
import styled from "styled-components";
import { useSidenavState } from "../context/SidenavContext";

const StyledSidenav = styled.nav`
  height: 100vh;
  width: 25rem;
  background-image: linear-gradient(to bottom, black, #323232);
  left: ${(props) => (props.display ? "5rem" : "-20rem")};
  transition: 0.8s;
  transform: translateX(${(props) => (props.display ? "0rem" : "-20rem")});
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

const SidenavHeading = styled.h1`
  text-align: center;
  padding: 2rem;
  color: #deaa86;
  font-weight: normal;
  font-size: xx-large;
`;

const SidenavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 84%;
  gap: 1.5rem;
`;

const SidenavListItem = styled.li`
  font-size: 1.3rem;
  position: relative;
  color: #deaa86;
  &::after {
    content: "";
    width: 0;
    height: 1px;
    background-color: #deaa86;
    position: absolute;
    top: 0.85rem;
    right: -2rem;
    transition: width 0.5s;
  }
  &::before {
    content: "";
    width: 0;
    height: 1px;
    background-color: #deaa86;
    position: absolute;
    top: 0.85rem;
    left: -2rem;
    transition: width 0.5s;
  }
  &:hover::after,
  &:hover::before {
    width: 1.5rem;
    background-color: #deaa86;
  }
`;

const Sidenav = () => {
  const value = useSidenavState();

  return (
    <StyledSidenav display={value.isSidenavOpen}>
      <SidenavHeading>Quick Link</SidenavHeading>
      <SidenavList>
        <SidenavListItem>Home</SidenavListItem>
        <SidenavListItem>About Me</SidenavListItem>
        <SidenavListItem>Work Experience</SidenavListItem>
        <SidenavListItem>Technologies</SidenavListItem>
        <SidenavListItem>Projects</SidenavListItem>
        <SidenavListItem>Extra Curricular</SidenavListItem>
      </SidenavList>
    </StyledSidenav>
  );
};

export default Sidenav;
