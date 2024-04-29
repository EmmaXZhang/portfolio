"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StarsCanvas from "@/components/StarBackground";
import Link from "next/link";

const Homepage = () => {
  const text = "Hi I'm Emma";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <StarsCanvas />
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* image */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative z-[-20]">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* text */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center z-[20]">
          {/* title */}
          <div className="text-4xl md:text-6xl font-bold">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* description */}
          <p className="md:text-xl">
            A Full Stack Web Developer blending financial expertise with
            technical prowess to deliver innovative software solutions.
            Proficient in React, JavaScript, C#, Python, Node.js, Git and other
            technologies. Recognized for excellent communication, teamwork, and
            deadline management skills..
          </p>
          <div className="w-full flex gap-4">
            <Link
              href="/portfolio"
              key="portfolio"
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              View My Work
            </Link>
            <Link href="/contact" className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
