import React, { useState } from "react";
import styled from "styled-components";
import { workExperience } from "../data/workExperience";
import Accordion from "../components/Accordion";

const StyledWorkExperience = styled.section`
  background-color: black;
  color: white;
  padding-top: 3rem;
`;
const AccordionContainer = styled.div`
  padding: 1rem;
  text-align: center;
  width: 100%;
  margin-left: 5rem;
  color: white;
`;

const ExperinceHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin: 0 0 2rem 5rem;
`;

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleItemClick = (index) => {
    setActiveTab((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <StyledWorkExperience>
      <ExperinceHeader>Work Experience</ExperinceHeader>
      <AccordionContainer>
        {workExperience.map((experience, index) => (
          <Accordion
            experience={experience}
            activeTab={activeTab}
            onClick={() => handleItemClick(index)}
            key={index}
            position={index}
            isOpen={activeTab === null ? true : activeTab === index}
          />
        ))}
      </AccordionContainer>
    </StyledWorkExperience>
  );
};

export default WorkExperience;
