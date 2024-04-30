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
    title: "Paws",
    description:
      "The “Paws” E-Commerce Store demonstrates my strong proficiency in full-stack development, showcasing skills in React and Redux,React Bootstrap, Node.js and Express.js, database management with MongoDB.",
    img: "/paws.jpeg",
    link: "https://paws-t05n.onrender.com",
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

    title: "3 Levels Memory Game",
    description:
      "Designed and implemented a three-level card memory game using HTML, CSS, and JavaScript, showcasing creativity and problem-solving abilities.",
    img: "/memory-game.jpeg",
    link: "https://emmaxzhang.github.io/MemoryGame/",
  },
];

// const images

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
          <div className="text-3xl w-screen h-[calc(100vh-6rem)] flex items-center justify-center sm:text-4xl md:text-4xl lg:text-5xl xl:text-8xl text-center">
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
                  {/* text container */}
                  <div className="flex flex-col gap-4 text-white justify-start l:h-[500px] xl:h-[500px] xxl:h-[500px]">
                    <h1 className="text-base font-bold mb-2 md:text-2xl lg:text-3xl xl:text-3xl">
                      {item.title}
                    </h1>

                    <p className="text-sm w-[160px] md:w-[260px] lg:w-[300px] lg:text-lg xl:w-[400px]">
                      {item.description}
                    </p>
                    <Link href={item.link} className="flex justify-start">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-3 lg:text-lg text-gray-500 font-semibold m-4 rounded bg-white">
                        See Demo
                      </button>
                    </Link>
                  </div>
                  {/* images */}
                  <div className="ml-10 relative w-[190px] h-[240px] md:w-[280px] md:h-[350px] lg:w-[350px] l:h-[500px] xl:w-[380px] xl:h-[500px] xxl:w-[380px] xxl:h-[500px]">
                    <Image src={item.img} alt="" fill />
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
