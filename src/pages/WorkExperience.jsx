import React, { useState } from "react";
import styled from "styled-components";
import { workExperience } from "../data/workExperience";
import Accordion from "../components/Accordion";

const AccordionContainer = styled.div`
  padding: 1rem;
  text-align: center;
  width: 100%;
  margin-left: 5rem;
`;

const ExperinceHeader = styled.h1`
  text-align: center;
  margin: 3rem 0 1rem 5rem;
`;

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState(-1);
  return (
    <>
      <ExperinceHeader>Work Experience</ExperinceHeader>
      <AccordionContainer>
        {workExperience.map((experience, index) => (
          <Accordion
            experience={experience}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            key={index}
            position={index + 1}
          />
        ))}
      </AccordionContainer>
    </>
  );
};

export default WorkExperience;
