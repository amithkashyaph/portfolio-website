import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledAccordion = styled.div`
  width: 70%;

  margin: 1rem auto;
`;
const AccordionHeader = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px 10px 0 0;
  padding: 1rem;
  display: grid;
  /* justify-content: space-between;
    align-items: center; */
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  border-bottom: none;
`;

const CompanyData = styled.div`
  /* display: flex;
    align-items: center;
    justify-content: left;
    padding: 1rem;
    gap: 0.8rem;
    height: 5rem; */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  align-items: center;
  padding: 0.5rem;
`;
const CompanyLogo = styled.img`
  grid-column: 1 / 2;
  width: 100%;
  padding: 0;
  margin: 0;
`;
const CompanyName = styled.h2`
  font-size: larger;
  grid-column: 2 / 3;
`;

const StyledChevron = styled.div`
  font-size: 1rem;
  color: #777;
  padding: 1rem;
  justify-self: end;
`;

const AccordionContent = styled.div`
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid lightgray;
  border-radius: 0 0 10px 10px;
  border-top: none;
`;

const Accordion = ({ experience }) => {
  return (
    <StyledAccordion>
      <AccordionHeader>
        <CompanyData>
          <CompanyLogo src={experience?.companyLogo} />
          <CompanyName>{experience?.companyName}</CompanyName>
        </CompanyData>
        <StyledChevron>
          <FontAwesomeIcon icon={faChevronDown} />
        </StyledChevron>
      </AccordionHeader>
      <AccordionContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, vero.
        Cum id hic qui repellat blanditiis delectus laboriosam rerum quis
        exercitationem minima, repudiandae corporis voluptatum, a ipsam
        voluptas, veritatis vitae.
      </AccordionContent>
    </StyledAccordion>
  );
};

export default Accordion;
