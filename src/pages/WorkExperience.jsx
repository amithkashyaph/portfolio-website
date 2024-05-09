import React from "react";
import styled from "styled-components";
import { workExperience } from "../data/workExperience";
import Accordion from "../components/Accordion";

const WorkExperience = () => {
  const AccordionContainer = styled.div`
    padding: 1rem;
    text-align: center;
    width: 100%;
    margin: 1rem 0 1rem 5rem;
  `;

  const ExperinceHeader = styled.h1`
    text-align: center;
    margin: 1rem 0 1rem 5rem;
  `;
  return (
    <>
      <ExperinceHeader>Work Experience</ExperinceHeader>
      <AccordionContainer>
        {workExperience.map((experience) => (
          <Accordion />
        ))}
      </AccordionContainer>
    </>
  );
};

export default WorkExperience;
