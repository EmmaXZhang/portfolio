import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Experience.css";
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
  // const ref = useRef(null);
  // const { scrollY } = useScroll({
  //   target: ref,
  //   offset: ["start end", "center start"],
  // });

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("x changed to", latest);
  // });

  return (
    <div className="my-1 flex flex-col items-center justify-center relative overflow-hidden">
      <h2 className="font-bold text-2xl flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-10">
        EXPERIENCE
      </h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          // style={{ scrollY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full origin-top bg-black"
        />
        <ul
          // ref={ref}
          className="w-full flex flex-col items-start justify-between m-auto"
        >
          <Details
            position="Junior Software Engineer"
            company="General Assembly"
            time="Feb 2024- May 2024"
            workDetails="4 Full-Stack Projects"
          />
          <Details
            position="Junior Software Engineer"
            company="Tafe NSW"
            time="Feb 2024- May 2024"
            workDetails="4 Full-Stack Projects"
          />
          <Details
            position="Junior Software Engineer"
            company="General Assembly"
            time="Feb 2024- May 2024"
            workDetails="4 Full-Stack Projects"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
