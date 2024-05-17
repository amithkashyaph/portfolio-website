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
  grid-template-columns: repeat(10, 1fr);
  justify-content: space-between;
`;

const CompanyData = styled.div`
  grid-column: 1 / 10;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 1rem;
  align-items: center;
  justify-content: left;
  padding: 0.5rem;
`;
const CompanyLogo = styled.img`
  grid-column: 1 / 3;
  width: 60%;
  padding: 0;
  margin: 0;
`;
const CompanyName = styled.h2`
  font-size: larger;
  grid-column: 2 / 3;
`;

const Designation = styled.h3`
  grid-column: 3 / 9;
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
  transform: ${({ isOpen }) => (isOpen ? `rotate(180deg)` : "")};
  transition: all 0.5s;
  grid-column: 10 / 11;
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
  text-align: justify;
  padding: 1rem;
  margin: 1rem;
  border-top: 1px solid lightgray;
`;

const Highlights = styled.ul`
  list-style: none;
  padding: 1rem 0;
`;

const Highlight = styled.li`
  letter-spacing: 1.1px;
  margin: 1rem 0;
`;

const Accordion = ({ experience, activeTab, onClick, position, isOpen }) => {
  const contentRef = useRef(null);
  const { companyLogo, designation, startDate, endDate, highlights } =
    experience;
  return (
    <StyledAccordion>
      <AccordionHeader
        onClick={() => {
          onClick();
        }}
      >
        <CompanyData>
          <CompanyLogo src={companyLogo} />
          <Designation>
            {designation}{" "}
            <span>
              ({startDate}-{endDate})
            </span>
          </Designation>
        </CompanyData>
        <StyledChevron isOpen={isOpen}>
          <FontAwesomeIcon icon={faChevronDown} />
        </StyledChevron>
      </AccordionHeader>

      <AccordionBody
        ref={contentRef}
        isOpen={isOpen}
        bodyHeight={contentRef?.current?.scrollHeight}
      >
        <AccordionContent>
          <Highlights>
            {highlights.map((highlight, i) => {
              return (
                <Highlight
                  key={i}
                  dangerouslySetInnerHTML={{ __html: highlight }}
                ></Highlight>
              );
            })}
          </Highlights>
        </AccordionContent>
      </AccordionBody>
    </StyledAccordion>
  );
};

export default Accordion;
