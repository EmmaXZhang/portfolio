"use client";
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
        {/* text container*/}
        <div className="sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-24 xl:gap-24 lg:pr-0 ">
          {/* skill container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* skill title */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* skill list */}
            <Skills />

            {/* scroll svg */}
          </div>
          {/* experience */}
          <div className="flex flex-col justify-center pb-48">
            <h1 className="font-bold text-2xl mb-12">EXPERIENCE</h1>
            {/* experience list */}
            {/* list item */}
            <div className="flex justify-between h-48">
              {/* left */}
              <div className="w-1/3">
                {/* job title */}
                <div className="bg-white p-3 font-semibold w-fit">
                  Junior Software developer
                </div>
                {/* job descriptin */}
                <div className="p-3 text-sm italic">
                  Create several full stack projects
                </div>
                {/* job date */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  Feb 2024 - May 2024
                </div>
                {/* company name */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  General Assembly
                </div>
              </div>
              {/* center */}
              <div className="w-1/6">
                {/* line */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* circle */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/3"></div>
            </div>

            {/* experience list */}
            {/* list item */}
            <div className="flex justify-between h-48">
              {/* left */}
              <div className="w-1/3"></div>
              {/* center */}
              <div className="w-1/6">
                {/* line */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* circle */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/3">
                {" "}
                {/* job title */}
                <div className="bg-white p-3 font-semibold w-fit">
                  Junior Software developer
                </div>
                {/* job descriptin */}
                <div className="p-3 text-sm italic">
                  Create several full stack projects
                </div>
                {/* job date */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  Feb 2024 - May 2024
                </div>
                {/* company name */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  General Assembly
                </div>
              </div>
            </div>

            {/* experience list */}
            {/* list item */}
            <div className="flex justify-between h-48">
              {/* left */}
              <div className="w-1/3">
                {/* job title */}
                <div className="bg-white p-3 font-semibold w-fit">
                  Junior Software developer
                </div>
                {/* job descriptin */}
                <div className="p-3 text-sm italic">
                  Create several full stack projects
                </div>
                {/* job date */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  Feb 2024 - May 2024
                </div>
                {/* company name */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  General Assembly
                </div>
              </div>
              {/* center */}
              <div className="w-1/6">
                {/* line */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* circle */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
