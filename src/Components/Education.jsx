import React, { useState, useEffect } from "react";
import { education } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../App.css";

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

          const initialX = isDesktop ? [150, -150] : [0, 0];
          useEffect(() => {
            if (inView) {
              controls.start({ opacity: 1, x: 0 });
            } else {
              controls.start({
                opacity: 1,
                x: index % 2 === 0 ? initialX[0] : initialX[1],
              });
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

              {/* cards div */}
              <motion.div
                ref={ref}
                // initial={{ opacity: 0, x: initialX }}
                animate={controls}
                transition={{
                  ease: [0, 0.55, 0.45, 1],
                  duration: 0.3,
                }}
                className={` w-full mt-10 xl:max-w-md p-1 sm:p-0 rounded-2xl backdrop-blur-md   ${
                  index % 2 === 0 ? "xl:ml-[-6vw]" : "xl:mr-[-6vw]"
                } xl:ml-45 xl:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
              >
                <div className="card">

                  <div className="content py-[36px] px-2 md:py-[36px]">

                    {/* first section of var */}
                    <div className="flex gap-1 justify-center items-center">
                      <div className="w-1/2 md:w-25 flex justify-center items-cente">
                         <img src={edu.img} alt="" className=" h-20 w-[80px] sm:w-18 object-cover border-2 border-zinc-500" />
                      </div>
                      <div className="">
                        <h1 className=" text-[18px] text-zinc-900 font-bold capitalize ">{edu.school}</h1>
                        <p className=" font-semibold text-zinc-900 text-[15px] ">
                          Grade: {edu.grade}
                        </p>
                      </div>
                    </div>

                    <p className="para mt-1 text-zinc-300  pl-2 md:p-5 ">{edu.desc}</p>


                  </div>


                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
