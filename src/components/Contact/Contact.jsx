import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import image1 from '../../assets/1.png';
import image2 from '../../assets/4.png';
import image3 from '../../assets/6.png';
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const formRef = useRef(null);

  const imageRefs = useRef({});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1b7ojvg",
        "template_vyz0u98",
        formRef.current,
        "NgMhs3ON4DM3vyQVo"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Something went wrong. Please try again!");
          console.log("Error sending message", error.text);
        }
      );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading text animation (split spans)
      gsap.fromTo(
        headingRef.current.querySelectorAll("span"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
  
      // Paragraph word animation
      gsap.fromTo(
        paragraphRef.current.querySelectorAll("span"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 90%",
            end: "top 65%",
            scrub: true,
          },
        }
      );
  
 // Blob 1 animation
gsap.fromTo(
  imageRefs.current.blob1,
  { x: -100, y: 100, scale: 0.8, opacity: 0 },
  {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    duration: 2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: imageRefs.current.blob1,
      start: "top 95%",
      end: "top 50%", 
      scrub: true,
    },
  }
);

// Blob 2 animation
gsap.fromTo(
  imageRefs.current.blob2,
  { x: 100, y: -100, scale: 0.4, opacity: 0 },
  {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    duration: 2,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: imageRefs.current.blob2,
      start: "top 90%",
      end: "bottom 20%",
      scrub: true,
    },
  }
);

// Blob 3 animation
gsap.fromTo(
  imageRefs.current.blob3,
  { scale: 0.8, y: 40, opacity: 0 },
  {
    scale: 1,
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "expo-out",
    scrollTrigger: {
      trigger: imageRefs.current.blob3,
      start: "top 95%",
      end: "top 50%",
      scrub: true,
    },
  }
);

  
      ScrollTrigger.refresh(); 
    });
  
    return () => ctx.revert(); 
  }, []);
  

  return (
    <div className="min-h-screen w-screen bg-black rounded-tr-[5em] rounded-tl-[5em] drop-shadow-2xl p-6 flex flex-col lg:flex-row items-center justify-between">
      <ToastContainer />

      {/* Left Section */}
      <div className="w-full lg:w-1/2 px-6 lg:px-12 mb-10 lg:mb-0 text-center lg:text-left">
        <h1
          ref={headingRef}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-8xl uppercase font-extrabold mb-6 sm:text-center lg:text-left"
        >
          <span>Let's</span>
          <br />
          <span>Get In</span>
          <br />
          <span>Touch</span>
        </h1>

        <div
          ref={paragraphRef}
          className="text-white text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0"
        >
          {`I’d love to hear from you! Whether you have a project in mind or just want to chat, feel free to reach out. Let's discuss your ideas, and I will be happy to assist you in bringing them to life.`
            .split(" ")
            .map((word, index) => (
              <span key={index}>{word} </span>
            ))}
        </div>

        {/* Decorative Image 1 - Bottom Left */}
        <img
          ref={(el) => (imageRefs.current.blob1 = el)}
          src={image1}
          alt="Decor Blob 1"
          className="w-40 h-40 lg:w-36 lg:h-36 absolute bottom-8 left-8 rounded-xl object-cover   z-10"
        />

        {/* Decorative Image 2 - Top Right */}
        <img
          ref={(el) => (imageRefs.current.blob2 = el)}
          src={image2}
          alt="Decor Blob 2"
          className="w-40 h-40 lg:w-48 lg:h-48 absolute top-6 right-6 rounded-xl object-cover z-10"
        />

        {/* Decorative Image 3 - Middle Left */}
        <img
          ref={(el) => (imageRefs.current.blob3 = el)}
          src={image3}
          alt="Decor Blob 3"
          className="w-28 h-28 lg:w-40 lg:h-40 absolute top-1/2 left-4 transform -translate-y-1/2 rounded-xl object-cover  z-10"
        />
      </div>

      {/* Right Section - Form */}
      <div className="w-full lg:w-1/2 px-6 lg:px-12">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="neon-border relative z-10 flex flex-col space-y-10 bg-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/10"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="peer w-full bg-transparent border-b-2 border-gray-500 text-white font-semibold text-xl placeholder-transparent focus:outline-none focus:border-purple-500 px-2 pt-5 pb-2"
            />
            <label className="absolute left-2 top-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="peer w-full bg-transparent border-b-2 border-gray-500 text-white font-semibold text-xl placeholder-transparent focus:outline-none focus:border-purple-500 px-2 pt-4 pb-2"
            />
            <label className="absolute left-2 top-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
              Your Email
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="peer w-full bg-transparent border-b-2 border-gray-500 text-white font-semibold text-xl placeholder-transparent focus:outline-none focus:border-purple-500 px-2 pt-5 pb-2"
            />
            <label className="absolute left-2 top-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
              Your Phone
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              className="peer w-full bg-transparent border-b-2 border-gray-500 text-white font-semibold text-xl placeholder-transparent focus:outline-none focus:border-purple-500 px-2 pt-4 pb-2 resize-none"
            />
            <label className="absolute left-2 top-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500">
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-600 transition"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
