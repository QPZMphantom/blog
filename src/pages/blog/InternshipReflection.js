import React from 'react';
import { Link } from 'react-router-dom';

function InternshipReflection() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="text-stone-600 hover:text-stone-800 mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors">
          <span>←</span> Back to Blog
        </Link>
        
        <article className="bg-white rounded-sm shadow-sm p-12">
          <img 
            src="/images/computer_city.jpeg" 
            alt="Computer Vision Internship" 
            className="w-full h-80 object-cover rounded-sm mb-12"
          />
          
          <h1 className="text-4xl font-light text-stone-800 mb-4 leading-tight">What I Learned from My Computer Vision Internship</h1>
          <p className="text-stone-500 mb-12 font-light">July 8, 2025</p>
          
          <div className="prose prose-lg prose-stone max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              My summer internship in computer vision has been a transformative experience that bridged 
              the gap between academic knowledge and real-world applications. Working on cutting-edge 
              projects has given me invaluable insights into the field of AI and machine learning.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Technical Skills Developed</h2>
            
            <h3 className="text-xl font-semibold mb-3">Deep Learning Frameworks</h3>
            <p className="mb-4">
              I gained hands-on experience with PyTorch and TensorFlow, implementing various neural network 
              architectures for image classification and object detection tasks. Working with pre-trained 
              models like ResNet and YOLO taught me the importance of transfer learning in practical applications.
            </p>

            <h3 className="text-xl font-semibold mb-3">Computer Vision Techniques</h3>
            <p className="mb-4">
              The internship exposed me to various CV techniques including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Image segmentation using U-Net architectures</li>
              <li>Feature extraction and matching for object tracking</li>
              <li>Real-time video processing and analysis</li>
              <li>Data augmentation strategies for improving model robustness</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Software Engineering Practices</h3>
            <p className="mb-4">
              Beyond the technical aspects, I learned crucial software engineering practices:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Version control with Git in a collaborative environment</li>
              <li>Docker containerization for reproducible deployments</li>
              <li>CI/CD pipelines for automated testing and deployment</li>
              <li>Code review processes and best practices</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Key Projects</h2>
            
            <h3 className="text-xl font-semibold mb-3">Automated Quality Inspection System</h3>
            <p className="mb-4">
              I contributed to developing an automated visual inspection system for manufacturing quality control. 
              This project taught me about the challenges of deploying ML models in production environments, 
              including handling edge cases and ensuring consistent performance.
            </p>

            <h3 className="text-xl font-semibold mb-3">Real-time Object Tracking</h3>
            <p className="mb-4">
              Working on a real-time tracking system for surveillance applications showed me the importance 
              of optimizing algorithms for speed without sacrificing accuracy. I learned about techniques 
              like model quantization and pruning to achieve real-time performance.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Soft Skills and Professional Growth</h2>
            <p className="mb-4">
              The internship wasn't just about technical skills. I developed crucial soft skills:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Presenting technical concepts to non-technical stakeholders</li>
              <li>Collaborating with cross-functional teams</li>
              <li>Time management and prioritizing tasks in a fast-paced environment</li>
              <li>Problem-solving under constraints and deadlines</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Lessons Learned</h2>
            <p className="mb-4">
              <strong>1. Theory vs. Practice:</strong> While academic knowledge provides a strong foundation, 
              real-world applications often require pragmatic solutions and trade-offs between accuracy, 
              speed, and resource constraints.
            </p>
            <p className="mb-4">
              <strong>2. Continuous Learning:</strong> The field of computer vision is rapidly evolving. 
              Staying updated with the latest research papers and techniques is crucial for professional growth.
            </p>
            <p className="mb-4">
              <strong>3. Interdisciplinary Thinking:</strong> Successful CV projects require not just ML expertise 
              but also domain knowledge, understanding of business requirements, and consideration of ethical implications.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Looking Forward</h2>
            <p className="mb-4">
              This internship has solidified my interest in pursuing a career that combines AI/ML with 
              real-world applications. The experience has motivated me to delve deeper into areas like 
              3D computer vision, neural architecture search, and explainable AI.
            </p>
            <p className="mb-4">
              I'm grateful for the mentorship I received and the opportunity to work on meaningful projects. 
              The skills and insights gained during this internship will undoubtedly shape my future 
              academic and career choices.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default InternshipReflection;