import React from "react";
import styled from "styled-components";
import { useSidenavState } from "../context/SidenavContext";

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(to top, #000000, #181818);
  left: 5rem;
`;

const StyledContent = styled.div`
  position: absolute;
  display: flex;
  gap: 3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  justify-content: center;
`;

const StyledIntro = styled.div`
  width: 30%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 2rem;
`;

const StyledIntroHeading = styled.h1`
  font-size: 3rem;
  letter-spacing: 1.5px;
`;

const StyledIntroName = styled.h2`
  font-size: 2rem;
  letter-spacing: 1.5px;
`;

const StyledIntroDescription = styled.p`
  text-align: end;
  letter-spacing: 1.5px;
  line-height: 1.6rem;
`;

const StyledImage = styled.img`
  width: 20%;
  border-radius: 1rem;
  opacity: 0.8;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
  height: auto;
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: #deaa86;
  font-size: 1rem;
  outline: none;
  border: none;
  letter-spacing: 1.2px;
  &:hover {
    color: white;
    background-color: #d9874d;
  }
`;

const Home = () => {
  const { toggleSidenav } = useSidenavState();

  return (
    <StyledHome>
      <StyledContent>
        <StyledIntro>
          <StyledIntroHeading>Hi, there!</StyledIntroHeading>
          <StyledIntroName>
            I am <span style={{ color: "#deaa86" }}>Amith Kashyap</span>
          </StyledIntroName>
          <StyledIntroDescription>
            A Software Engineer with 5+ years of experience working
            predominantly on the backend with some exposure to frontend
            technologies
          </StyledIntroDescription>
          <StyledButton onClick={toggleSidenav}>Know more</StyledButton>
        </StyledIntro>
        <StyledImage src="IMG_9155.jpg" />
      </StyledContent>
    </StyledHome>
  );
};

export default Home;
