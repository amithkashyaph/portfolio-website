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
  const [activeTab, setActiveTab] = useState(null);

  const handleItemClick = (index) => {
    setActiveTab((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <ExperinceHeader>Work Experience</ExperinceHeader>
      <AccordionContainer>
        {workExperience.map((experience, index) => (
          <Accordion
            experience={experience}
            activeTab={activeTab}
            onClick={() => handleItemClick(index)}
            key={index}
            position={index}
          />
        ))}
      </AccordionContainer>
    </>
  );
};

export default WorkExperience;
