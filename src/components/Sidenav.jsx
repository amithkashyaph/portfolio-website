import React from "react";
import styled from "styled-components";
import { useSidenavState } from "../context/SidenavContext";

const StyledSidenav = styled.nav`
  height: 100vh;
  width: 25rem;
  background-image: linear-gradient(to bottom, black, grey);
  left: ${(props) => (props.display ? "5rem" : "-20rem")};
  transition: 0.8s;
  transform: translateX(${(props) => (props.display ? "0rem" : "-20rem")});
  position: fixed;
  display: flex;
  flex-direction: column;
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
