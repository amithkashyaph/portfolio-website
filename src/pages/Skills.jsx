import React from "react";
import styled from "styled-components";

const StyledSkills = styled.div`
  width: 70%;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
`;

const SkillsHeader = styled.h1`
  margin-bottom: 1rem;
`;

const SkillSet = styled.ul`
  padding: 1rem;
  list-style: none;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const Skill = styled.li`
  padding: 0.8rem 1.5rem;
  border: 1px solid lightgray;
  font-size: larger;
  border-radius: 2rem;
  &:hover {
    background-color: #2d2d2d;
    color: white;
  }
`;

const Skills = () => {
  return (
    <StyledSkills>
      <SkillsHeader>Skills</SkillsHeader>
      <SkillSet>
        <Skill>Java/Springboot</Skill>
        <Skill>Golang</Skill>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>Javascript</Skill>
        <Skill>React</Skill>
        <Skill>NextJS</Skill>
        <Skill>NodeJS</Skill>

        <Skill>MySQL</Skill>
        <Skill>MongoDB</Skill>
        <Skill>Kafka</Skill>
        <Skill>AWS</Skill>
        <Skill>Redis</Skill>
        <Skill>Docker</Skill>
        <Skill>Git</Skill>
        <Skill>Distributed Systems</Skill>
        <Skill>Performance Optimisation</Skill>
        <Skill>Unit Testing</Skill>
      </SkillSet>
    </StyledSkills>
  );
};

export default Skills;
