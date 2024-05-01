import React, { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, workDetails }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-xl">
          {position}&nbsp;
          <a className="capitalize text-blue-400"> @ {company}</a>
        </h3>
        <span className="capitalize font-medium text-black/75">{time}</span>
        <p className="font-medium w-full">{workDetails}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-1 flex flex-col items-center justify-center relative overflow-hidden">
      <h2 className="font-bold text-2xl flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-10">
        EXPERIENCE
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div className="absolute left-9 top-0 w-[4px] h-full origin-top bg-black" />
        <ul className="w-full flex flex-col items-start justify-between m-auto">
          <Details
            position="Junior Software Engineer"
            company="General Assembly"
            time="Feb 2024- May 2024"
            workDetails="Participated in an intensive full-time program specializing in Full Stack Software Development, acquiring over 400 hours of hands-on training. Utilized a blend of user-cantered design methodologies and technical skills to execute various projects"
          />
          <Details
            position="Certificate IV in IT (Programming)"
            company="Tafe NSW"
            time="Nov 2022- Nov 2023"
            workDetails="Mastered a comprehensive skill set through theoretical understanding and practical application. Learned introductory programming techniques and adeptly resolved client ICT issues. Contributed to cyber security risk management while adhering to IP, ethics, and privacy policies. Additionally, developed proficiency in building data-driven applications and basic mobile apps, ensuring readiness for diverse challenges in the digital landscape."
          />
          <Details
            position="Several Accoutant Positons"
            company="NTT Australia Pty Ltd | Stamford Hotels and Resorts | OPPO Mobile Australia"
            time="Apr 2016- Jun 2022"
            workDetails="Excelled in monthly balance sheet reconciliations, ensuring accuracy within tight deadlines, and maintaining meticulous transaction records."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
