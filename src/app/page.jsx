"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StarsCanvas from "@/components/StarBackground";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <StarsCanvas />
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* image */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* text */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-4xl md:text-6xl font-bold">Hi I&apos;m Emma</h1>
          {/* description */}
          <p className="md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, ipsam quae laborum unde dolor reprehenderit. Mollitia,
            iusto animi atque cupiditate voluptatibus doloremque debitis
            obcaecati, cum, accusamus sed dolores ullam fuga.
          </p>
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
