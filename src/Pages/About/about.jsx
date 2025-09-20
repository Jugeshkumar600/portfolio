import React from "react";
import profileImg from "../../assets/profile.jpg"; // <-- replace with your image path
import { FaUniversity, FaGraduationCap } from "react-icons/fa";

function About() {
  const education = [
    {
      degree: "B.C.A (Bachelor of Computer Applications)",
      institution: "MGKVP University",
      year: "2022 - 2025",
      icon: <FaUniversity className="text-blue-500 text-4xl" />,
    },
    {
      degree: "High School Diploma",
      institution: "ABC High School",
      year: "2018 - 2020",
      icon: <FaGraduationCap className="text-green-500 text-4xl" />,
    },
    {
      degree: "Secondry School Diploma",
      institution: "ABC High School",
      year: "2020 - 2022",
      icon: <FaGraduationCap className="text-green-500 text-4xl" />,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-800 border-b-4 border-blue-500 pb-2 inline-block">
        About Me
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          {/* Intro Section */}
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Hi, I’m{" "}
            <span className="font-semibold text-blue-600">Jugesh Kumar</span>, a{" "}
            <span className="font-semibold">Frontend Developer (Fresher)</span>.
            I create responsive and user-friendly web interfaces that deliver
            smooth digital experiences. With a foundation in{" "}
            <span className="text-gray-800 font-medium">
              HTML, CSS, JavaScript, and React
            </span>
            , I bring creativity, adaptability, and a fresh perspective to every
            project.
          </p>

          {/* Skills Section */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-wrap sm:flex-row items-start sm:items-center bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 gap-4"
              >
                {/* Icon Section */}
                <div className="flex flex-shrink-0 ">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full text-2xl shadow-inner">
                    {edu.icon}
                  </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm md:text-base text-blue-600 font-medium mt-1">
                    {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
