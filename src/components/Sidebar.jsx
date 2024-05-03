import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSidenavState } from "../context/SidenavContext";

const StyledSidebar = styled.div`
  height: 100vh;
  width: 5rem;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  z-index: 11;
`;

const StyledHamburgerIcon = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  &:hover {
    color: #deaa86;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1.5rem;
`;

const StyledListItem = styled.li`
  font-size: 1.5rem;
  color: #777;
  &:hover {
    color: #deaa86;
  }
`;

const StyledYear = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Sidebar = () => {
  const { toggleSidenav } = useSidenavState();

  return (
    <StyledSidebar>
      <StyledHamburgerIcon onClick={toggleSidenav}>
        <FontAwesomeIcon icon={faBars} />
      </StyledHamburgerIcon>

      <StyledList>
        <StyledListItem>
          <FontAwesomeIcon icon={faFacebook} />
        </StyledListItem>
        <StyledListItem>
          <FontAwesomeIcon icon={faInstagram} />
        </StyledListItem>
        <StyledListItem>
          <FontAwesomeIcon icon={faLinkedin} />
        </StyledListItem>
        <StyledListItem>
          <FontAwesomeIcon icon={faTwitter} />
        </StyledListItem>
        <StyledListItem>
          <FontAwesomeIcon icon={faGithub} />
        </StyledListItem>
      </StyledList>
      <StyledYear>2024</StyledYear>
    </StyledSidebar>
  );
};

export default Sidebar;
