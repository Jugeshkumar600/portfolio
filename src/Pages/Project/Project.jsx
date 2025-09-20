import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A responsive personal portfolio website built with React and Tailwind CSS.",
    image: "https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg",
    link: "https://yourportfolio.com",
  },
  {
    name: "E-commerce App",
    description:
      "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
    image:
      "https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=612x612&w=0&k=20&c=ROAncmFL4lbSQdU4VOhyXu-43ngzfEqHE5ZZAw5FtYk=",
    link: "https://github.com/yourrepo/ecommerce",
  },
  {
    name: "Blog Platform",
    description:
      "A blogging platform with authentication and CRUD features using React and Firebase.",
    image: "https://www.shutterstock.com/image-photo/trend-artwork-sketch-image-photo-600nw-2488225205.jpg",
    link: "https://github.com/yourrepo/blog-platform",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
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
