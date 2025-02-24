// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

// const Footer = () => {
//   gsap.registerPlugin(ScrollTrigger);
//   const footerRef = useRef(null);

//   useEffect(() => {
//     console.log("Footer Loaded"); 

//     const footer = footerRef.current;
    
//     if (!footer) return;

//     gsap.from(footer, {
//       opacity: 0,
//       y: 50,
//       duration: 1.5,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: footer,
//         start: "top 100%",
//         toggleActions: "play none none none",
//         markers: true,
//       },
//     });
//   }, []);

//   return (
//     <footer
//       ref={footerRef}
//       className="relative min-h-[100vh] w-full bg-gray-900 text-white flex flex-col items-center justify-center space-y-5 px-10 border-4 border-red-500"
//     >
//       <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//         Connect With Me
//       </h2>
//       <div className="flex space-x-8">
//         {["/images/github.png", "/images/linkedin.png", "/images/twitter.png"].map((src, index) => (
//           <motion.img
//             key={index}
//             src={src}
//             alt="Social Icon"
//             className="w-12 h-12 cursor-pointer rounded-full"
//             whileHover={{ scale: 1.2, rotate: 10 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           />
//         ))}
//       </div>
//       <p className="text-lg font-light text-gray-400">
//         © {new Date().getFullYear()} All Rights Reserved | Built with ❤️ by Arshad
//       </p>
//     </footer>
//   );
// };

// export default Footer;
