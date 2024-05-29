import React from "react";
import styled from "styled-components";

const StyledSkills = styled.div`
  width: 90%;
`;

const SkillSet = styled.ul``;

const Skill = styled.li``;

const Skills = () => {
  return (
    <StyledSkills>
      <SkillSet>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>Javascript</Skill>
        <Skill>React</Skill>
        <Skill>NextJS</Skill>
        <Skill>NodeJS</Skill>
        <Skill>Java/Springboot</Skill>
        <Skill>Golang</Skill>
        <Skill>MySQL</Skill>
        <Skill>Mongo</Skill>
        <Skill>Kafka</Skill>
        <Skill>AWS</Skill>
        <Skill>Redis</Skill>
        <Skill>Docker</Skill>
        <Skill>Git</Skill>
        <Skill>Distributed Systems</Skill>
        <Skill>Performance Optimisation</Skill>
      </SkillSet>
    </StyledSkills>
  );
};

export default Skills;
