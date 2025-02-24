import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import WhaleScene from "./Model";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const heroRef = useRef(null);
  const buttonRef = useRef(null);

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

  return (
    <>
      <div className="relative h-dvh w-screen overflow-x-hidden">
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
              <h1 className="hero-heading absolute bottom-5 right-5 z-40 text-blue-300 text-8xl uppercase font-extrabold pr-10">
                Jeni<b className="text-white">x</b>
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
                  {/* <WhaleScene /> */}
                </div>
                <div className="w-2/5 z-40">
                <motion.button
        ref={buttonRef}
        whileHover={{ rotate: -12, y: 12, scale: 1.15 }}
        transition={{ type: "spring", stiffness: 200, damping: 3 }}
        className="px-12 py-4 text-2xl rounded-full text-white font-bold bg-gradient-to-r 
          from-black via-purple-700 to-orange-400 border-4 border-purple-500 
          shadow-2xl hover:opacity-90 transition-all mt-12"
      >
        CONTACT ME
      </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="hero-heading absolute bottom-5 right-5 text-black text-8xl uppercase font-extrabold pr-10">
          Jeni<b className="text-black">x</b>
        </h1>
      </div>
    </>
  );
};

export default Hero;
