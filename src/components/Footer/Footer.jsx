import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Images
import GitHub from '../../assets/github.jpeg';
import LinkedIn from '../../assets/linkedin.jpeg';
import xImage from '../../assets/x.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(
      footer,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#0d0d0d] text-white pt-24 pb-12 px-6 md:px-16 overflow-hidden"
    >
      {/* Slanted divider effect */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-purple-600 to-indigo-600 transform -skew-y-3" />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
        Let's Connect & Build Together
      </h2>

      {/* Socials with glowing hex tiles */}
      <div className="flex gap-6 justify-center items-center flex-wrap">
  {[
    { icon: GitHub, link: "https://github.com/Arshad-WD", rounded: true },
    { icon: LinkedIn, link: "https://www.linkedin.com/in/arshad-chaudhary-388312288/", rounded: true },
    { icon: xImage, link: "https://x.com/dark_arsha78045?s=21", rounded: true },
  ].map(({ icon, link, rounded }, index) => (
    <motion.a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index, type: "spring" }}
      className="group w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md shadow-purple-500/20 hover:shadow-purple-400/30 overflow-hidden rounded-xl"
    >
      <motion.img
        src={icon}
        alt="social"
        className={`w-10 h-10 group-hover:scale-125 transition-all duration-300 ${rounded ? "rounded-full" : ""}`}
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.a>
  ))}
</div>


      <p className="mt-12 text-sm text-gray-400 text-center max-w-xl mx-auto leading-relaxed">
        Crafted with passion, coffee ☕ and code 💻 by Arshad. Let's turn ideas into innovation 🚀.
      </p>
      <p className="text-xs text-gray-500 text-center mt-4">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
