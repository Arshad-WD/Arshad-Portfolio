import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Importing images from the assets folder
import ReactJs from '../../assets/reactjs.jpg';
import NextJs from '../../assets/Nextjs.jpg';
import NodeJs from '../../assets/node.jpg';
import MongoDB from '../../assets/mongo.jpg';
import TailwindCSS from '../../assets/tailwindcss.jpg';
import JavaScript from '../../assets/js.jpg';
import Flutter from '../../assets/flutter.jpg';
import Gsap from '../../assets/gsap.jpg';

import './Techstack.css';

const Techstack = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Ensure images are loaded before running GSAP animations
    const images = document.querySelectorAll('.tech-stack-image');
    let loadedImages = 0;

    images.forEach((img) => {
      img.onload = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          initAnimations();
        }
      };
    });

    const initAnimations = () => {
      const cards = [
        { id: '#card-1', endTranslatex: -2000, rotate: 45 },
        { id: '#card-2', endTranslatex: -1000, rotate: -30 },
        { id: '#card-3', endTranslatex: -2000, rotate: 45 },
        { id: '#card-4', endTranslatex: -1500, rotate: -30 },
        { id: '#card-5', endTranslatex: -2000, rotate: 45 },
        { id: '#card-6', endTranslatex: -1000, rotate: -30 },
        { id: '#card-7', endTranslatex: -2000, rotate: 45 },
        { id: '#card-8', endTranslatex: -1500, rotate: -30 },
      ];

      ScrollTrigger.create({
        trigger: '.wrapper-stack',
        start: 'top top',
        end: '+=900vh',
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          gsap.to('.wrapper-stack', {
            x: `${-480 * self.progress}vw`,
            duration: 0.5,
            ease: 'power3.out',
          });
        },
      });

      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card.id,
          start: 'top top',
          end: '+=1000vh',
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(card.id, {
              x: `${card.endTranslatex * self.progress}px`,
              rotate: `${card.rotate * self.progress * 2}`,
              duration: 0.5,
              ease: 'power3.out',
            });
          },
        });
      });
    };

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container">
      <section className="wrapper-stack z-40">
        <h1 className='stack uppercase'>Known Tech Stack</h1>

        <div className="tech-stack-grid">
          <div className="card" id="card-1">
            <img src={ReactJs} alt="React" className="tech-stack-image" />
          </div>
          <div className="card" id="card-2">
            <img src={NextJs} alt="Next.js" className="tech-stack-image" />
          </div>
          <div className="card" id="card-3">
            <img src={NodeJs} alt="Node.js" className="tech-stack-image" />
          </div>
          <div className="card" id="card-4">
            <img src={MongoDB} alt="MongoDB" className="tech-stack-image" />
          </div>
          <div className="card" id="card-5">
            <img src={TailwindCSS} alt="Tailwind CSS" className="tech-stack-image" />
          </div>
          <div className="card" id="card-6">
            <img src={JavaScript} alt="JavaScript" className="tech-stack-image" />
          </div>
          <div className="card" id="card-7">
            <img src={Flutter} alt="Flutter" className="tech-stack-image" />
          </div>
          <div className="card" id="card-8">
            <img src={Gsap} alt="Gsap" className="tech-stack-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Techstack;