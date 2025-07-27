import React from 'react'
import Petsaathi from "../assets/petsaathi.png"

const Projects = () => {
  const projects = [
    {
      title: "PetSaathi",
      description: "A multi-vendor pet adoption platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). Connects pet seekers with animal shelters and individual pet owners, offering functionalities like adoption listings, service bookings, and integrated online payment via eSewa.",
      image: Petsaathi,
      link: "https://github.com/anupdangi21/PetSaathi",
      tags: ["MERN", "Figma", "eSewa API"]
    },
    {
      title: "Course Management System",
      description: "A desktop-based academic platform developed using Java Swing and MySQL that allows users to register as students and enroll in courses. Features include class schedules, assigned tutors, and academic feedback from instructors.",
      image: "/course-management.jpg",
      link: "https://github.com/anupdangi21/CourseManagementSystem",
      tags: ["Java Swing", "MySQL"]
    },
    {
      title: "Weather Forecasting Web App",
      description: "A responsive web application built using HTML, CSS, PHP, JavaScript, and MySQL that displays current weather and 3-day forecasts. Includes historical weather data and offline search capabilities.",
      image: "/weather-app.jpg",
      link: "https://github.com/anupdangi21/WeatherApp",
      tags: ["PHP", "JavaScript", "MySQL"]
    },
    {
      title: "PayNepal",
      description: "Designed a multifunctional payment app UI using Figma, with features like currency conversion, cardless ATM withdrawal, flight booking, ride-sharing payments, and accessibility modes.",
      image: "/paynepal.jpg",
      link: "https://www.figma.com/file/xCmH9M3p9SYVjVv5kqWyS1",
      tags: ["Figma", "UI/UX"]
    },
    {
      title: "Local Farmer Web App",
      description: "Developed a platform allowing local farmers to sell produce directly to consumers. Features include product browsing, purchases, and analytical dashboards for farmers.",
      image: "/farmer-app.jpg",
      link: "https://github.com/anupdangi21/LocalFarmers2",
      tags: ["Node.js", "Express", "MongoDB"]
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was carefully crafted to solve specific problems.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;