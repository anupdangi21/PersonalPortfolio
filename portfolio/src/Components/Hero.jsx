import React from 'react'
import Mainprofile from "../assets/Anup6.jpg"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-white to-amber-50">
      <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-xl">
        <div className="relative w-40 h-40 mx-auto mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full blur-md opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
          <img 
            src={Mainprofile} 
            alt="Profile" 
            className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg z-10"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
          Hi, I'm <span className="text-amber-600">Anup Dangi</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-600 leading-relaxed">
          Front-End Developer passionate about creating beautiful, interactive digital experiences with modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-amber-500 text-white rounded-full shadow-md hover:bg-amber-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Send Message
          </a>
          
          <a
            href="/AnupDangi_CV.pdf"
            download
            className="px-8 py-3 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-medium flex items-center justify-center gap-2 border border-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
export default Hero;