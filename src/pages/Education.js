import React from 'react';

function Education() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Educational Journey</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Current: UC Davis (2021 - Present)</h3>
	  		      <img 
                  src="/images/college.jpeg" 
                  alt="Peking University Shenzhen"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              <p className="text-gray-700 mb-2">
                <strong>Major:</strong> Computer Science & Economics (Double Major)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Expected Graduation:</strong> June 2027
              </p>
              <p className="text-gray-700">
                Currently pursuing a double major that combines my passion for technology with my interest in economic systems and market dynamics.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">High School: Shenzhen Senior High School (2020 - 2023)</h3>
              <img 
                src="/images/senior-high.jpeg" 
                alt="Shenzhen Senior High School" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-2">
                One of the top high schools in Shenzhen, where I developed a strong foundation in mathematics and sciences while exploring my interests in computer science through various projects and competitions.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Junior High: Peking University Shenzhen (2017 - 2020)</h3>
              <img 
                src="/images/pku-junior.jpg" 
                alt="Peking University Shenzhen" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700">
                An affiliated school of Peking University, where I first discovered my love for problem-solving and analytical thinking. The rigorous academic environment helped shape my approach to learning and intellectual curiosity.
              </p>
            </div>

            <div className="border-t pt-6 mt-8">
              <h3 className="text-xl font-semibold mb-3">Key Academic Interests</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Machine Learning and Artificial Intelligence</li>
                <li>Financial Economics and Market Analysis</li>
                <li>Software Engineering and System Design</li>
                <li>Data Structures and Algorithms</li>
                <li>Econometrics and Statistical Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
