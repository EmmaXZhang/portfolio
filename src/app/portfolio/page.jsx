"use client";
import { motion, useTransform, useScroll, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import useMeasure from "react-use-measure";
import { animate } from "framer-motion";
import "./page.css";

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

const images = [
  { img: "/portfolioCarousel/P-1.png", url: "https://paws-t05n.onrender.com" },
  { img: "/portfolioCarousel/P-2.png", url: "https://paws-t05n.onrender.com" },
  { img: "/portfolioCarousel/P-3.png", url: "https://paws-t05n.onrender.com" },
  { img: "/portfolioCarousel/P-5.png", url: "https://paws-t05n.onrender.com" },
  { img: "/portfolioCarousel/P-6.png", url: "https://paws-t05n.onrender.com" },
  { img: "/portfolioCarousel/P-7.png", url: "https://paws-t05n.onrender.com" },
  { img: "/portfolioCarousel/P-8.png", url: "https://paws-t05n.onrender.com" },
  { img: "/portfolioCarousel/P-9.png", url: "https://paws-t05n.onrender.com" },
  { img: "/portfolioCarousel/P-12.png", url: "https://paws-t05n.onrender.com" },
  { img: "/portfolioCarousel/P-13.png", url: "https://paws-t05n.onrender.com" },
  {
    img: "/portfolioCarousel/MG-1.png",
    url: "https://emmaxzhang.github.io/MemoryGame/",
  },
  {
    img: "/portfolioCarousel/MG-2.png",
    url: "https://emmaxzhang.github.io/MemoryGame/",
  },
  {
    img: "/portfolioCarousel/MG-3.png",
    url: "https://emmaxzhang.github.io/MemoryGame/",
  },
  {
    img: "/portfolioCarousel/MG-4.png",
    url: "https://emmaxzhang.github.io/MemoryGame/",
  },
  { img: "/portfolioCarousel/HU-1.png", url: "https://hike-u.onrender.com" },
  { img: "/portfolioCarousel/HU-2.png", url: "https://hike-u.onrender.com" },
  { img: "/portfolioCarousel/HU-3.png", url: "https://hike-u.onrender.com" },
  { img: "/portfolioCarousel/HU-4.png", url: "https://hike-u.onrender.com" },
  { img: "/portfolioCarousel/HU-5.png", url: "https://hike-u.onrender.com" },
  { img: "/portfolioCarousel/HU-6.png", url: "https://hike-u.onrender.com" },
];

const PortfolioPage = () => {
  let [carouselRef, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const FAST_DURATION = 55;
  const SLOW_DURATION = 105;

  const [duration, setDuration] = useState(FAST_DURATION);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  // [0,1]->y, [0,1]->x
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-79%"]);

  return (
    <div style={{ height: "100vh" }}>
      <motion.div
        className="h-full relative"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        <div className="h-[600vh]" ref={ref}>
          <div className="h-[calc(100vh-6rem)] items-center justify-center">
            <div className="h-2/4 text-4xl text-white flex justify-center items-center w-screen sm:text-4xl md:text-4xl lg:text-5xl xl:text-8xl text-center">
              My Works
            </div>

            {/* CAROUSAL */}
            <motion.div
              className="h-1/4 absolute left-0 flex gap-8"
              ref={carouselRef}
              style={{ x: xTranslation }}
            >
              {[...images, ...images].map((item, idx) => (
                <Card image={item.img} key={idx} url={item.url} />
              ))}
            </motion.div>

            {/* arrow */}
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute svg-container"
            >
              <Image
                src="/arrow_down.svg"
                width="120"
                height="120"
                alt="SVG Image"
              />
            </motion.div>
          </div>

          {/* portfolio container */}
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
                  <div className="flex flex-col gap-4 text-white justify-start l:h-[600px] xl:h-[600px] xxl:h-[600px]">
                    <h1 className="text-base font-bold mb-2 md:text-xl lg:text-4xl xl:text-4xl">
                      {item.title}
                    </h1>

                    <p className="text-sm w-[160px] md:w-[260px] lg:w-[300px] xl:w-[400px] lg:text-3xl md:text-xl">
                      {item.description}
                    </p>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="flex justify-start"
                    >
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-3 lg:text-lg text-gray-500 font-semibold m-4 rounded bg-white">
                        See Demo
                      </button>
                    </Link>
                  </div>
                  {/* images */}
                  <div className="ml-10 relative w-[300px] h-[440px] md:w-[400px] md:h-[550px] lg:w-[480px] l:h-[600px] xl:w-[580px] xl:h-[750px] xxl:w-[480px] xxl:h-[600px]">
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
