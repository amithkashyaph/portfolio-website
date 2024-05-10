import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledAccordion = styled.div`
  width: 70%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem auto;
  transition: display 1s;
`;
const AccordionHeader = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
`;

const CompanyData = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  align-items: center;
  justify-content: left;
  padding: 0.5rem;
`;
const CompanyLogo = styled.img`
  grid-column: 1 / 2;
  width: 90%;
  padding: 0;
  margin: 0;
`;
const CompanyName = styled.h2`
  font-size: larger;
  grid-column: 2 / 3;
`;

const Designation = styled.h3`
  grid-column: 2 / 6;
  font-size: large;
  justify-self: left;
  span {
    font-size: small;
  }
`;

const StyledChevron = styled.div`
  font-size: 1rem;
  color: #777;
  padding: 1rem;
  transform: rotate(0deg);
  justify-self: end;
  transform: ${(props) =>
    props.activeTab === props.position ? `rotate(180deg)` : ""};
  transition: all 0.5s;
`;

const AccordionContent = styled.div`
  font-size: 1rem;
  padding: 1.5rem;
  width: 95%;
  display: ${(props) =>
    props.activeTab === props.position ? "block" : "none"};
  border-top: 1px solid lightgray;
  margin: 1rem auto;
`;

const Accordion = ({ experience, activeTab, setActiveTab, position }) => {
  return (
    <StyledAccordion>
      <AccordionHeader onClick={() => setActiveTab(position)}>
        <CompanyData>
          <CompanyLogo src={experience?.companyLogo} />
          <Designation>
            {experience.designation}{" "}
            <span>
              ({experience.startDate}-{experience.endDate})
            </span>
          </Designation>
        </CompanyData>
        <StyledChevron activeTab={activeTab} position={position}>
          <FontAwesomeIcon icon={faChevronDown} />
        </StyledChevron>
      </AccordionHeader>

      <AccordionContent activeTab={activeTab} position={position}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, vero.
        Cum id hic qui repellat blanditiis delectus laboriosam rerum quis
        exercitationem minima, repudiandae corporis voluptatum, a ipsam
        voluptas, veritatis vitae.
      </AccordionContent>
    </StyledAccordion>
  );
};

export default Accordion;
