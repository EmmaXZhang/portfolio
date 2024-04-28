import React, { useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./Experience.css";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, workDetails }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
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
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("x changed to", latest);
  });

  return (
    <div className="my-1 relative">
      <h2 className="font-bold text-2xl mb-32 w-full text-center">
        EXPERIENCE
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative scrollable-div">
        <motion.div
          style={{ scaleY: scrollY }}
          className="absolute left-9 top-0 w-[4px] h-full origin-top bg-black"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
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
