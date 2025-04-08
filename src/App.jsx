import React from 'react';
import Hero from './components/Hero';
import Teachstack from './components/Tach Stack/Techstack';
import About from './components/About Me/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return(
    <main className='relative min-h-screen w-screen overflow-x-hidden '>
      <Hero />

      <section className='relative min-h-screen bg-black'>
        <Teachstack />
      </section>
      <section className='relative min-h-screen bg-black '>
      <About />
      </section>
      <section className='relative min-h-screen bg-black '>
      <Projects />
      </section>
      <section className='relative min-h-screen bg-white overflow-hidden'>
      <Contact />
      </section>
      <section className="relative bg-gray-900 text-white min-h-[50vh] flex items-center justify-center" >
      <Footer />
      </section>
    </main>
  )
}

export default App;