import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      title: "ECS170 Project - Automated Acoustic Monitoring of Rainforest Biodiversity",
      description: "Developed an automated system for detecting and classifying bird and frog species in rainforest soundscapes using advanced machine learning techniques including Swin Transformer, achieving 92.55% accuracy.",
      pdfUrl: "/projects/ECS170 project/ECS170_____finalll (1).pdf",
      imageUrl: "/images/boi.jpeg",
    },
    {
      title: "ECS171 Project - Income Prediction Model",
      description: "Machine learning project focused on income prediction using various classification algorithms and feature engineering techniques.",
      pdfUrl: "/projects/ecs171 project/Income.pdf",
      imageUrl: "/images/Income_prediction.jpeg",
    },
    {
      title: "PSC120 Project - PD Simulation",
      description: "Political science computational project simulating prisoner's dilemma scenarios and analyzing cooperative strategies in game theory.",
      pdfUrl: "/projects/psc120 project/PD_simulation.pdf",
      imageUrl: "/images/PD.jpeg",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-light text-stone-800 mb-6 text-center">Projects</h1>
        <p className="text-lg text-stone-600 mb-16 text-center font-light max-w-3xl mx-auto">
          A collection of my technical projects spanning mobile development, financial analysis, AI applications, and data science.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">What I'm Working On</h2>
          <p className="text-gray-700 mb-4">
            I'm always exploring new technologies and building projects that solve real-world problems. Currently, I'm interested in:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Computer vision applications for accessibility</li>
            <li>Quantitative finance tools and algorithmic trading strategies</li>
            <li>AI-powered productivity tools</li>
            <li>Open source contributions to developer tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;