import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
} from "../constants/skillData";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
