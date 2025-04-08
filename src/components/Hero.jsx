import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import WhaleScene from "./Model";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const heroRef = useRef(null);
  const buttonRef = useRef(null);

  const [buttonText, setButtonText] = useState("CHECK RESUME");

  const handleResumeClick = () => {
    setButtonText("Viewing Resume...");
    window.open("/Arshad_resume.pdf", "_blank");

    setTimeout(() => {
      setButtonText("CHECK RESUME");
    }, 2000);
  };

  useGSAP(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.set(hero, {
      clipPath: "polygon(14% 0, 72% 0, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from(hero, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: hero,
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  // --- Rotating Quotes (mobile only) ---
  const quotes = [
    { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "The best way to get a project done faster is to start sooner.", author: "Jim Highsmith" },
    { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
    { text: "It’s not a bug – it’s an undocumented feature.", author: "Anonymous" },
    { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
    { text: "Programming isn’t about what you know; it’s about what you can figure out.", author: "Chris Pine" },
    { text: "Good code is its own best documentation.", author: "Steve McConnell" },
    { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" },
    { text: "Success is not in never failing, but rising every time you fall.", author: "Confucius" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  ];

  const [randomQuote, setRandomQuote] = useState(null);
  useEffect(() => {
    const index = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[index]);
  }, []);

  return (
    <>
      {/* Desktop View */}
      <div className="relative h-dvh w-screen overflow-hidden hidden sm:block">
        <div
          ref={heroRef}
          className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-100"
        >
          <div className="bg-black h-screen w-full text-white">
            {/* Navbar */}
            <div className="Navbar px-10 pt-10 items-center w-full">
              <ul className="flex justify-between space-x-12 z-40">
                <li className="text-4xl font-semibold hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out pl-20">
                  ABOUT
                </li>
                <li className="text-4xl font-semibold hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out pr-16">
                  PROJECTS
                </li>
                <li className="text-4xl font-semibold hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out pr-16">
                  CONTACT US
                </li>
              </ul>
            </div>

            {/* Hero Section */}
            <div className="text-center items-center z-40">
              <h1 className="text-[12rem] font-extrabold sm:w-full w-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent uppercase tracking-[-0.095em] mt-[-5rem]">
                HI, I'M ARSHAD
              </h1>

              <div className="flex justify-between w-full px-7 z-40">
                <div className="w-[28rem] p-6 text-white text-2xl font-sans rounded-xl shadow-lg">
                  <p className="text-justify uppercase">
                    Frontend Developer with a passion for UI/UX and
                    Cybersecurity, crafting bold and immersive experiences. 🚀
                  </p>
                </div>

                {/* Whale Scene */}
                <div
                  className="w-full h-[80vh] bg-transparent absolute top-0 left-0 z-20 flex justify-center"
                  style={{ position: "absolute", top: "20vh" }}
                >
                  <WhaleScene />
                </div>

                <div className="w-2/5 z-40">
                  <motion.button
                    onClick={handleResumeClick}
                    ref={buttonRef}
                    whileHover={{ rotate: -12, y: 12, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 200, damping: 3 }}
                    className="px-12 py-4 text-2xl rounded-full text-white font-bold bg-gradient-to-r 
                    from-black via-purple-700 to-orange-400 border-4 border-purple-500 
                    shadow-2xl hover:opacity-90 transition-all mt-12"
                  >
                    {buttonText}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden bg-black text-white px-4 py-6 min-h-screen relative">
        {/* Mobile Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold tracking-wide uppercase text-gray-300">Portfolio</h1>
        </div>

        {/* Hero Intro */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 bg-clip-text text-transparent uppercase text-center leading-tight">
          Hi, I'm Arshad
        </h1>

        {/* Description */}
        <div className="mt-6 mx-auto bg-gray-900/40 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-5 text-center max-w-md">
          <p className="uppercase text-sm tracking-wide leading-relaxed text-gray-200">
            Frontend Developer with a passion for UI/UX and Cybersecurity, crafting bold and immersive experiences. 🚀
          </p>
        </div>

        {/* Resume Button */}
        <div className="flex justify-center mt-10">
          <motion.button
            onClick={handleResumeClick}
            ref={buttonRef}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="px-6 py-3 text-lg rounded-full text-white font-bold bg-gradient-to-r 
              from-black via-purple-700 to-orange-400 border-4 border-purple-500 
              shadow-xl hover:opacity-90 transition-all"
          >
            {buttonText}
          </motion.button>
        </div>

        {/* Random Quote Section */}
        {randomQuote && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 text-center px-6"
          >
            <p className="text-gray-400 italic text-lg">"{randomQuote.text}"</p>
            <p className="text-gray-600 text-sm mt-2">– {randomQuote.author}</p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Hero;
