import React from "react";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../assets/img1.jpg";
import { easeInOut, motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="  md:px-[7vw] lg:px-[10vw] font-sans  ">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center">
        {/* Left Side */}
        <motion.div
        initial={{x:"40px" , opacity:0}}
        animate={{x:"0px" , opacity:1}}
        transition={{ease:easeInOut , duration:1 , delay:0.5 }}
        
        className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ashan Shaik
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={["Frontend Developer", "MERN Developer", "Coder"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>
          {/* About Me Paragraph */}
          <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{ease:easeInOut , duration:1 , delay:1.5}}
        
           className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed p-5 sm:p-0">
            I am a passionate frontend and MERN stack developer with a strong
            focus on building responsive and interactive web applications. As a
            fresher, I’ve developed several full-stack projects that demonstrate
            my skills in creating user-friendly interfaces and functional
            backends. I enjoy adding smooth animations and enhanced user
            experience using tools like Framer Motion. I'm always eager to learn
            and apply modern web technologies to create clean, engaging, and
            scalable applications
          </motion.p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=18MP-wnADAPqJ3537QKwaCeuj88oAwZPR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold relative bg-zinc-900 shadow-lg hover:shadow-blue-500 transition-all duration-800 items-center justify-center hover:text-blue-500 delay-400 
            before:absolute  before:bottom-0  before:left-1/2  before:translate-x-[-50%]  before:w-0  before:h-0    before:bg-blue-500  before:rounded-2xl  before:transition-all  before:duration-800  before:ease-in-out  hover:before:w-full  hover:before:h-0.5  before:z-0  overflow-hidden "
          >
            DOWNLOAD CV
          </a>
        </motion.div>
        
        {/* Right Side */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="md:w-1/2 flex justify-center md:justify-start"
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-4xl "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              //   src={profileImage}
              src={img1}
              alt="Ashan"
              className="w-full h-full rounded-4xl transform scale-x-[-1] object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,.5)] hover:drop-shadow-[0_10px_40px_rgba(130,69,236,.5)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};
