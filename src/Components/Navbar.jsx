import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Hamburger from "hamburger-react";

export const Navbar = () => {
  const tags = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },
  ];

  const [isScrolled, setIscrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [lastScrolled, SetlastScrolled] = useState(window.scrollY);

  useEffect(() => {
    const handelscroll = () => {
      if (window.scrollY > 50) {
        setIscrolled(true);
      } else {
        setIscrolled(false);
      }
      if (window.scrollY > lastScrolled) {
        setOpen(false);
      }

      SetlastScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handelscroll);
    return () => window.removeEventListener("scroll", handelscroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 transition duration-1000  ${
        isScrolled
          ? "bg-transparent "
          : "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="flex items-center w-[90%] m-auto justify-between p-3  text-white ">
        <div className="text-2xl font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ashan</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Shaik</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* pc */}
        <div className="hidden gap-5 text-white md:flex cursor-pointer">
          {tags.map((tag, index) => (
            <a
              key={tag.id}
              onClick={() => handleMenuItemClick(tag.id)}
              className="hover:text-[#8245ec]"
            >
              {tag.id}
            </a>
          ))}
        </div>

        <div className="hidden md:flex gap-5">
          <a href="http://www.linkedin.com/in/shaik-mohammad-ashan-b7a864322">
            <FaLinkedin className="scale-160  hover:hover:opacity-50 " />
          </a>

          <a href="https://github.com/ashu1144">
            <FaGithub className="scale-160 hover:opacity-50" />
          </a>
        </div>

        {/* mobile */}
        <div className="md:hidden flex flex-row gap-3 justify-center items-center">
          <a href="http://www.linkedin.com/in/shaik-mohammad-ashan-b7a864322">
            <FaLinkedin className="scale-160  hover:hover:opacity-50 " />
          </a>

          <a href="https://github.com/ashu1144">
            <FaGithub className="scale-160 hover:opacity-50" />
          </a>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <div
        className={`transition-opacity duration-1000 ease-in-out absolute bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md w-full 
    ${
      isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }`}
      >
        <div className="flex flex-col items-center text-white ">
          {tags.map((tag, index) => (
            <a
              className="text-2xl p-5 underline capitalize cursor-pointer"
              key={tag.labe}
              onClick={() => handleMenuItemClick(tag.id)}
            >
              {tag.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
