"use client";
import { AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";

const TransitionProvider = ({ children }) => {
  return (
    <AnimatePresence>
      <div className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
        <div className="h-24">
          <NavBar />
        </div>

        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
