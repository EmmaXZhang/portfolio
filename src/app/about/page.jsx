"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Python",
  "C#",
  "Express.js",
  "Node.js",
  "MongoDB",
  "SQL",
  "Django",
  "Redux",
  "Bootstrap",
  "Tailwind",
];

const AboutPage = () => {
  return (
    <motion.div
      className="h-full overflow-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full">
        {/* text */}
        <div className="sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              delectus veritatis saepe amet, architecto impedit perspiciatis.
              Incidunt obcaecati, fugiat et quae nulla ipsa voluptates itaque
              delectus sunt, assumenda similique ut.
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </span>
            {/* scroll svg */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.94"
                stroke="black"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="black" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="black" strokeWidth="1"></path>
            </svg>
          </div>
          {/* skill container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* skill title */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* skill list */}
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                  key={skill}
                >
                  {skill}
                </div>
              ))}
            </div>
            {/* skill scroll svg */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.94"
                stroke="black"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="black" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="black" strokeWidth="1"></path>
            </svg>
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
        {/* svg */}
        <div></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
