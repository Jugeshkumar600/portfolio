import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-500 text-4xl" />,
    },
    { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-red-500 text-4xl" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaNode className="green-red-500 text-4xl" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaBootstrap className="blue-red-500 text-4xl" />,
    },
  
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center p-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full text-3xl mb-4 shadow-inner">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="text-xl font-semibold text-gray-900">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
