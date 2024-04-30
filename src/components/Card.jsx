import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const Card = ({ image, url }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[300px] min-w-[300px] bg-slate-400 rounded-xl flex justify-center items-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-black opacity-50 h-full w-full flex justify-center items-center">
              <motion.h1
                className="bg-white font-semibold text-sm z-10 px-2 py-2 rounded-full flex justify-center items-center ga-[0.5ch] hover:opacity-70"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                <Link href={url} target="_blank" className="z-30">
                  Explore
                </Link>
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Image src={image} alt={image} fill style={{ objectFit: "cover" }} />
    </motion.div>
  );
};

export default Card;
