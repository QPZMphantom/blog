import React from 'react';

function ProjectCard({ title, description, pdfUrl, githubUrl, imageUrl, graphUrl }) {
  return (
    <div className="bg-white rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : graphUrl ? (
        <img 
          src={graphUrl} 
          alt={`${title} Graph`} 
          className="w-full h-56 object-contain bg-stone-50"
        />
      ) : (
        <div className="w-full h-56 bg-stone-100 flex items-center justify-center">
          <p className="text-stone-400 font-light">Project Screenshot</p>
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-light mb-3 text-stone-800">{title}</h3>
        <p className="text-stone-600 mb-6 leading-relaxed font-light">{description}</p>
        
        <div className="flex gap-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 transition-colors font-light text-sm"
            >
              View on GitHub
            </a>
          )}
          {pdfUrl && (
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 transition-colors font-light text-sm"
            >
              View PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;