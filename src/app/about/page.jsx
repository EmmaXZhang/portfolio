"use client";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
// import { useScroll } from "@react-three/drei";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-full overflow-scroll lg:flex"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex">
        <div className="sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-24 xl:gap-24 lg:pr-0 ">
          {/* skill container */}
          <div className="flex flex-col  justify-center">
            <Skills />
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44">
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
            <path d="M12 10.586 8.707 7.293 7.293 8.707 12 13.414l4.707-4.707-1.414-1.414L12 10.586z" />
            <path d="m12 14.586-3.293-3.293-1.414 1.414L12 17.414l4.707-4.707-1.414-1.414L12 14.586z" />
          </svg>

          {/* experience container */}
          <div
            ref={containerRef}
            className="flex flex-col justify-center pb-48"
          >
            <Experience scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
