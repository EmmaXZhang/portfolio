import { Skill_data } from "../constants/skillData";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";
import { motion } from "framer-motion";
import { slideInFromTop } from "../utils/motions";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-10"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <motion.h1
        className="font-bold text-2xl mb-8 mt-10"
        initial="hidden"
        animate="visible"
        variants={slideInFromTop()}
      >
        SKILLS
      </motion.h1>
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
    </section>
  );
};

export default Skills;
