"use client";
import { FEATURES } from "@/constants";
import { slideInFromLeft } from "@/utils/animate";
import { motion } from "framer-motion";
import React from "react";
import Card from "../Card";

const Content: React.FC = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 px-10 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <h1 className="text-4xl font-bold mb-4">
              Where Your Ideas Find Their Place
            </h1>
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400  max-w-[600px]"
          >
            Our app is the perfect space for your thoughts. Effortlessly
            organize, sync, and access your notes anytime, anywhere. Turn every
            idea into action with tools designed to keep you on track and
            inspired.
          </motion.p>
        </div>
      </motion.div>
      <div className="px-10 pt-10 flex flex-wrap gap-10">
        {FEATURES?.map((feature, index) => (
          <Card
            key={index}
            title={feature?.title}
            description={feature?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
