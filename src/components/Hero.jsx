import React from "react";
import { HERO_CONTENT } from "../constants";
import nateAvatar from "../assets/nateAvatar.png";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-600 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-semibold tracking-tight lg:mt-16"
            >
              Nate Melendrez
            </motion.h1>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-yellow-500 bg-clip-text text-3xl tracking-tigh"
            >
              <TypeAnimation
                sequence={[
                  "Aspiring Full Stack Developer",
                  1500, // Display for 2 seconds
                  "Passionate about Coding",
                  1500,
                  "Eager to Learn New Technologies",
                  1500,
                  "Aspiring Full Stack Developer",
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: "inline-block" }}
                className="type-animation-cursor"
              />
            </motion.div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className=" m-2 flex items-center justify-center gap-10 text-2xl">
              <a
                href="https://www.linkedin.com/in/nathaniel-melendrez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-yellow-500" />
              </a>
              <a
                href="https://github.com/nathaniel-melendrez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-yellow-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={nateAvatar}
              alt="nateAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
