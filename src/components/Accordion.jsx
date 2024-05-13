import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import styled, { css } from "styled-components";

const StyledAccordion = styled.div`
  width: 70%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem auto;
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

const AccordionBody = styled.div`
  font-size: 1rem;
  width: 95%;
  height: 0;
  overflow: hidden;
  transition: all 0.7s;
  ${({ isOpen, bodyHeight }) =>
    isOpen &&
    css`
      height: ${bodyHeight}px;
    `}
`;

const AccordionContent = styled.div`
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  border-top: 1px solid lightgray;
`;

const Accordion = ({ experience, activeTab, onClick, position }) => {
  const contentRef = useRef(null);
  console.log("activeTab : ", activeTab);
  console.log("height : ", contentRef?.current?.scrollHeight);
  return (
    <StyledAccordion>
      <AccordionHeader
        onClick={() => {
          onClick();
          console.log(
            "contentRef.current.scrollHeight : ",
            contentRef.current.scrollHeight
          );
        }}
      >
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

      <AccordionBody
        ref={contentRef}
        isOpen={activeTab === position || !activeTab}
        bodyHeight={contentRef?.current?.scrollHeight}
      >
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          vero. Cum id hic qui repellat blanditiis delectus laboriosam rerum
          quis exercitationem minima, repudiandae corporis voluptatum, a ipsam
          voluptas, veritatis vitae.
        </AccordionContent>
      </AccordionBody>
    </StyledAccordion>
  );
};

export default Accordion;
