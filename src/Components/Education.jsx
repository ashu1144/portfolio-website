import React, { useState, useEffect } from "react";
import { education } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Education = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      <div className="relative">
        <div className="absolute xl:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {education.map((edu, index) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({
            threshold: 0.3, // Adjust sensitivity
            triggerOnce: false,
          });

          const initialX = isDesktop ? [48,-48]: [0,0];
          useEffect(() => {
            if (inView) {
              controls.start({ opacity: 1, x: 0 });
            } else {
              controls.start({ opacity: 1, x: index % 2 === 0 ? initialX[0] : initialX[1] });
            }
          }, [inView, controls]);

         

          return (
            <div
              key={edu.id}
              className={`flex flex-col sm:flex-row items-center mb-16 ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              <div className="absolute xl:left-[33.8vw] left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 xl:w-16 xl:h-16 rounded-full flex justify-center items-center z-10">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: initialX }}
                animate={controls}
                transition={{
                  ease: [0, 0.55, 0.45, 1],
                  duration: 0.3
                }}
                className={`w-full xl:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                  index % 2 === 0 ? "xl:ml-[1vw]" : "xl:mr-[1vw]"
                } xl:ml-45 xl:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-md sm:text-sm text-gray-300">
                        {edu.school}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 font-bold">
                  Grade: {edu.grade}
                </p>
                <p className="mt-4 text-gray-400">{edu.desc}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
