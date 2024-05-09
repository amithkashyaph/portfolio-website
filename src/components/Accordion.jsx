import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Accordion = ({ experience }) => {
  const StyledAccordion = styled.div`
    width: 70%;
    border: 1px solid lightgray;
    padding: 1rem;
    margin: 1rem auto;
  `;
  const AccordionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const CompanyData = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
  `;
  const CompanyLogo = styled.img``;
  const CompanyName = styled.h2`
    font-size: large;
  `;

  const StyledChevron = styled.div`
    font-size: 1rem;
    color: #777;
    padding: 1rem;
  `;

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
    </StyledAccordion>
  );
};

export default Accordion;
