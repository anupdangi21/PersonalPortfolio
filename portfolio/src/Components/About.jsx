import React, { useState, useEffect } from 'react';
import Anup1 from "../assets/Anup1.jpg"
import Anup2 from "../assets/Anup2.jpg"
import Anup3 from "../assets/Anup3.jpg"
import Anup4 from "../assets/Anup4.jpg"
import Anup5 from "../assets/Anup5.jpg"
const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Anup1, Anup2, Anup3, Anup4, Anup5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-32 px-6 min-h-screen bg-gradient-to-br from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Anup Dangi</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a passionate front-end developer with expertise in creating user-centered digital experiences.
              My background in Human-Computer Interaction informs my approach to design and development.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With 3+ years of experience, I specialize in React.js, modern JavaScript, and responsive design.
              I bridge the gap between design and technology to create intuitive interfaces.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects,
              or mentoring aspiring developers.
            </p>
          </div>

          <div className="lg:w-1/2 w-full h-[32rem] relative rounded-xl overflow-hidden shadow-lg border-2 border-amber-100">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`About me ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-amber-600' : 'bg-amber-200'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;