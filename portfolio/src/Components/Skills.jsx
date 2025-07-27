import React, { useState } from 'react';
import Html from "../assets/HTML.png"
import Javas from "../assets/Javascript.png"
import Talwind from "../assets/Talwind css.png"
import Figma from "../assets/figma.png"
import Mongo from "../assets/mongo.png"
import Node from "../assets/node.png"
import Git from "../assets/git.png"
import Php from "../assets/php.png"
import Java from "../assets/java.png"
import Mysql from "../assets/mysql.png"
import Postman from "../assets/psotman.png"
import Unity from "../assets/unity.png"
import Github from "../assets/github.png"
import Jira from "../assets/jira.png"
import Python from "../assets/python.png"

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const primarySkills = [
    { name: 'HTML & CSS', icon: Html },
    { name: 'JavaScript', icon: Javas },
    { name: 'Tailwind CSS', icon: Talwind },
    { name: 'Figma', icon: Figma },
    { name: 'MongoDB', icon: Mongo },
    { name: 'Node.js', icon: Node },
    { name: 'Git', icon: Git }
  ];

  const additionalSkills = [
    { name: 'PHP', icon: Php },
    { name: 'Python', icon: Python },
    { name: 'Java', icon: Java },
    { name: 'MySQL', icon: Mysql },
    { name: 'Postman', icon: Postman },
    { name: 'Unity', icon: Unity },
    { name: 'GitHub', icon: Github },
    { name: 'Jira', icon: Jira }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {primarySkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center border border-amber-100"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
            </div>
          ))}

          {/* View More Button */}
          <div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center cursor-pointer border border-amber-100"
            onClick={() => setShowMore(!showMore)}
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-amber-100 rounded-full">
              <span className="text-2xl font-bold text-amber-600">+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">View More</h3>
          </div>
        </div>

        {/* Additional Skills */}
        {showMore && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-700">Additional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {additionalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center border border-amber-100"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src={skill.icon} alt={skill.name} className="h-12 w-12 object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;