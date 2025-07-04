import React from "react";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import img1 from '../assets/img1.jpg'
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section
      id="about"
      className="  md:px-[7vw] lg:px-[10vw] font-sans  "
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
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
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate frontend and MERN stack developer with a strong
            focus on building responsive and interactive web applications. As a
            fresher, I’ve developed several full-stack projects that demonstrate
            my skills in creating user-friendly interfaces and functional
            backends. I enjoy adding smooth animations and enhanced user
            experience using tools like Framer Motion. I'm always eager to learn
            and apply modern web technologies to create clean, engaging, and
            scalable applications
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/uc?export=download&id=18MP-wnADAPqJ3537QKwaCeuj88oAwZPR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              zIndex: 50,
              position: "relative",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <motion.div
        initial={{y:-50 , opacity:0}}
        animate={{y:0 , opacity:1}}
        transition={{duration:1 ,ease:"easeInOut"}}
        
        
        
        className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
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
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};
