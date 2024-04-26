"use client";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full overflow-scroll lg:flex"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full">
        <div className="sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-24 xl:gap-24 lg:pr-0 ">
          {/* skill container */}
          <div className="flex flex-col  justify-center">
            <Skills />
          </div>
          {/* experience */}
          <div className="flex flex-col justify-center pb-48">
            <Experience />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
