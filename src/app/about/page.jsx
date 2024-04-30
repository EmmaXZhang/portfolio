"use client";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
// import { useScroll } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import "./page.css";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full overflow-scroll lg:flex"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex">
        <div className="sm:p-8 md:p-12 lg:p-20 xl:pl-48 xl:pr-48 xl:pb-48 flex flex-col gap-24 md:gap-24 lg:gap-24 xl:gap-24 lg:pr-0 ">
          {/* skill container */}
          <div className="flex flex-col  justify-center">
            <Skills />
          </div>

          {/* arrow */}
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="svg-container flex justify-center items-center"
          >
            <Image
              src="/arrow_down.svg"
              width="120"
              height="120"
              alt="SVG Image"
            />
          </motion.div>

          {/* experience container */}
          <div className="flex flex-col justify-center pb-48">
            <Experience />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
