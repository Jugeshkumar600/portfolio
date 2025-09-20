import React from "react";
import myresume from "../../assets/mahi.pdf";
import profilePhoto from "../../assets/profile.jpg";

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 md:px-20 gap-10">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-lg font-medium text-gray-700">Hello, it's me</h2>
        <h1 className="font-bold text-4xl md:text-5xl text-gray-900">
          Jugesh Kumar
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-2">
          And I'm a <span className="text-blue-600">Frontend Developer</span>
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          I am a passionate frontend developer with expertise in React.js, HTML,
          CSS, and JavaScript. I create responsive and user-friendly web
          applications that provide seamless user experiences. I am dedicated to
          writing clean and efficient code while staying updated with the latest
          industry trends.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4 ">
          <button className="bg-blue-500 hover:bg-blue-600 transition-all text-white font-bold py-2 px-6 rounded-full shadow-md cursor-pointer">
            Hire Me
          </button>

          {/* Correct way to download a PDF */}
          <a
            href={myresume}
            download="Jugesh_Kumar_Resume.pdf"
            className="bg-gray-800 hover:bg-gray-900 transition-all text-white font-bold py-2 px-6 rounded-full shadow-md inline-block"
          >
            Get Resume
          </a>
        </div>
      </div>

      <div>
        <img
          src={profilePhoto}
          alt="Jugesh Kumar - Profile Photo"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}

export default Home;
