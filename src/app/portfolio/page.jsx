"use client";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Three Levels Memory Game",
    description:
      "Designed and implemented a three-level card memory game using HTML, CSS, and JavaScript, showcasing creativity and problem-solving abilities.",
    img: "/memory-game.jpeg",
    link: "https://emmaxzhang.github.io/MemoryGame/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Home Recipes Box",
    description:
      "Engineered a full-stack application called 'Home Recipe Box', utilizing technologies such as Node.js, Express, JavaScript, EJS, Bootstrap, MongoDB, and integration of RESTful APIs, fetching data from third-party APIs.",
    img: "/home-box-recipe.jpeg",
    link: "https://home-recipe-box.onrender.com",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Hike U",
    description:
      "A group created application Hiking Planner. It is the ultimate hike planning application developed using the MERN Stack, and utilizing third-party APIs (Mapbox and weather forecast view) to enhance project functionality.",
    img: "/hike-u.jpeg",
    link: "https://hike-u.onrender.com",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Paws",
    description:
      "The “Paws” E-Commerce Store demonstrates my strong proficiency in full-stack development, showcasing skills in frontend development with React, global state management with Redux, backend development with Node.js and Express, database management with MongoDB and images cloud management with Cloudinary, React Bootstrap.",
    img: "/paws.jpeg",
    link: "https://paws-t05n.onrender.com",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  // [0,1]->y, [0,1]->x
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  console.log("scrollYProgress: ", scrollYProgress);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <div style={{ height: "100vh" }}>
      <motion.div
        className="h-full relative"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-[600vh]" ref={ref}>
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
            My Works
          </div>

          <div className="sticky top-0 flex h-screen gap-4 items-center">
            <motion.div style={{ x }} className="flex">
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300`}
              ></div>
              {items.map((item) => (
                <div
                  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                  key={item.id}
                >
                  <div className="flex flex-col gap-6 text-white items-center justify-center ">
                    <h1 className="font-bold mb-10 text-xl md:text-4xl lg:text-6xl xl:text=8xl">
                      {item.title}
                    </h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-[504px] lg:w-[500px] l:h-[650px] xl:w-[600px] xl:h-[700px]">
                      <Image src={item.img} alt="" fill />
                    </div>
                    <p className="w-80 md:96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.description}
                    </p>
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-3 lg:text-lg text-gray-500 font-semibold m-4 rounded bg-white">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
