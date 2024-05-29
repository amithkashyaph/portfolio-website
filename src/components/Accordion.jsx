import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import styled, { css } from "styled-components";

const StyledAccordion = styled.div`
  width: 70%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
  margin: 2rem auto;
`;
const AccordionHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-items: center;
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
  grid-column: 1 / 2;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Designation = styled.h3`
  grid-column: 2 / 9;
  font-size: 20px;
  justify-self: left;
`;

const TenureDate = styled.h5`
  font-size: small;
  display: inline-block;
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
  height: ${({ isOpen }) => (isOpen ? "auto" : 0)};
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
  padding: 0 1rem;
  margin: 1rem;
  border-top: 1px solid lightgray;
`;

const Highlights = styled.ul`
  padding-top: 1rem;
  &:last-child {
    border: none;
  }
  overflow: auto;
`;

const Highlight = styled.li`
  letter-spacing: 1.1px;
  margin: 1rem 0;
  border-bottom: 1px solid lightgray;
  &:last-child {
    border-bottom: none;
  }
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
            <TenureDate>
              ({startDate}-{endDate})
            </TenureDate>
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
                <Highlight key={i}>
                  <p
                    dangerouslySetInnerHTML={{ __html: highlight }}
                    style={{ marginBottom: "1rem" }}
                  ></p>
                </Highlight>
              );
            })}
          </Highlights>
        </AccordionContent>
      </AccordionBody>
    </StyledAccordion>
  );
};

export default Accordion;
