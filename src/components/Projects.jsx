import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div id="projects" className="border-b border-neutral-600 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/4"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={project.image}
                    width={150}
                    height={150}
                    alt={project.title}
                    className="mb-6 rounded"
                  />
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="rounded bg-[hsl(222,46%,30%)] px-4 py-2 text-white hover:bg-yellow-800"
                    >
                      DEMO
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      className="rounded bg-[hsl(222,46%,30%)] px-4 py-2 text-white hover:bg-yellow-800"
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <a href={project.url} target="_blank">
                  <h6 className="mb-2 font-semibold text-lg text-yellow-400">
                    {project.title}
                  </h6>
                  <p className="mb-4 text-neutral-400">{project.description}</p>
                </a>
                <div className="mb-4">
                  {project.technologies.map((tech, techIndex) => {
                    return (
                      <span
                        key={techIndex}
                        className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-800"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
