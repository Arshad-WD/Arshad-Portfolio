import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Heading reveal animation
    gsap.fromTo(
      headingRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 2,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: true,
        },
      }
    );

    // Paragraph reveal animation
    gsap.fromTo(
      paragraphRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 90%',
          end: 'top 65%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="h-screen w-screen bg-black rounded-tr-[5em] rounded-tl-[5em] drop-shadow-2xl p-6 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section with Text Reveal */}
      <div className="w-full lg:w-1/2 pl-10 mb-8 lg:mb-0 text-center lg:text-left">
        <h1
          ref={headingRef}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-left mb-8 uppercase font-extrabold sm:text-center lg:text-left"
        >
          <span>Let's</span><br />
          <span>Get In</span><br />
          <span>Touch</span>
        </h1>

        <div
          ref={paragraphRef}
          className="text-white text-lg sm:text-xl lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0"
        >
          {""}
          {`I’d love to hear from you! Whether you have a project in mind or just want to chat, feel free to reach out. \n Let's discuss your ideas, and I will be happy to assist you in bringing them to life.`.split(' ').map((word, index) => (
            <span key={index}>{word} </span>
          ))}
        </div>
      </div>

      {/* Right Section with Contact Form */}
      <div className="w-full lg:w-1/2">
        <form ref={formRef} className="flex flex-col space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              className="p-5 bg-gray-800 border-2 border-gray-500 text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-700 transition duration-300 w-full"
            />
            <label className="absolute top-0 left-0 p-5 text-gray-400 text-lg transition-all duration-300 transform -translate-y-4 origin-top-left">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder=" "
              className="p-5 bg-gray-800 border-2 border-gray-500 text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-700 transition duration-300 w-full"
            />
            <label className="absolute top-0 left-0 p-5 text-gray-400 text-lg transition-all duration-300 transform -translate-y-4 origin-top-left">
              Your Email
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              placeholder=" "
              className="p-5 bg-gray-800 border-2 border-gray-500 text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-700 transition duration-300 w-full"
            />
            <label className="absolute top-0 left-0 p-5 text-gray-400 text-lg transition-all duration-300 transform -translate-y-4 origin-top-left">
              Your Phone
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              placeholder=" "
              className="p-5 bg-gray-800 border-2 border-gray-500 text-white rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-700 transition duration-300 w-full"
              rows="5"
            />
            <label className="absolute top-0 left-0 p-5 text-gray-400 text-lg transition-all duration-300 transform -translate-y-4 origin-top-left">
              Your Message
            </label>
          </div>

          {/* Send Button */}
          <motion.button
            ref={buttonRef}
            whileHover={{ scale: 1.02 }}
            className="w-full py-3 rounded-full text-xl font-bold shadow-xl transition-all duration-200 border-2 border-white bg-black text-white hover:bg-purple-700"
          >
            Send
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
