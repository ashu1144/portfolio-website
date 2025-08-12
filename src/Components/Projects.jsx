import React, { useState } from "react";
import { projects } from "../constants";
import { easeInOut, motion } from "framer-motion";

function Projects() {
  const [selected, setSelected] = useState(null);

  const handleOpenModal = (pro) => {
    setSelected(pro);
  };

  const handleCloseModal = () => {
    setSelected(null);
  };

  return (
    <motion.div
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
      transition={{ ease: easeInOut, duration: 1 }}
      viewport={{ once: true, amount: 0.01 }}
      id="project"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[2vw] font-sans relative"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <div className="w-32 h-1 bg-purple-500 mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              stiffness: 50,
              damping: 15,
            }}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="group relative h-[250px] w-full rounded-2xl overflow-hidden">
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute bg-purple-500/95 -bottom-40 w-full h-50 p-3 flex flex-col gap-2 group-hover:bottom-0 transition-all duration-500">
                <span className="text-lime-400 font-bold text-lg">
                  {project.title}
                </span>
                <p className="text-neutral-800 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col">
              {/* Image */}
              <div className="w-full flex justify-center px-4">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="lg:w-full max-h-[40vh] w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Details */}
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4">
                  {selected.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {selected.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-center font-semibold"
                  >
                    View Code
                  </a>
                  <a
                    href={selected.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-center font-semibold"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Projects;
