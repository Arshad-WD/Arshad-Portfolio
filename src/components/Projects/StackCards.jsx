import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MovieImg from "../../assets/Movie_Rating.jpg"
import ExpenseImg from "../../assets/Expense_tracker.jpg"
import AiImg from "../../assets/Ai_Convo.jpg"
import FantaImg from "../../assets/fanta.jpg"

gsap.registerPlugin(ScrollTrigger);

const StackingCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const cards = [
    { id: 1, title: "01 MOVIE RATING", project: "Visit Site", img: MovieImg, link: "https://entertainment-gold.vercel.app/" },
    { id: 2, title: "02 EXPENSE TRACKER", project: "Visit Site", img: ExpenseImg, link: "https://expense-tracker-ircf.vercel.app/" },
    { id: 3, title: "03 AI CONVERSATION (DESIGN ONLY)", project: "Visit Site", img: AiImg, link: ""},
    { id: 4, title: "04 GSAP FANTA (DESIGN)", project: "Visit Site", img: FantaImg, link: ""},
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 300, opacity: 0 },
        {
          y: index * 10,
          opacity: 1,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: `top+=${index * 100}px center`,
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center bg-white min-h-screen py-40">
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardsRef.current[index] = el)}
          className="stacking-card  w-[95%] max-w-4xl h-96 bg-white text-black rounded-3xl p-5 shadow-xl border-2 border-black absolute"
          style={{ top: `${index * 10}%`, zIndex: cards.length }}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-extrabold">{card.title} </h3>
            <a href={card.link} target="_blank" rel="noopener noreferrer">
            <button className="text-sm px-4 py-1 bg-white rounded-full border-2 border-black  hover:bg-black hover:text-white">
              {card.project}
            </button>
            </a>
          </div>
          <img src={card.img} alt="Project" className="w-full h-72 object-cover rounded-xl" />
        </div>
      ))}
    </div>
  );
};

export default StackingCards;
