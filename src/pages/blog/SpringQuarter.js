import React from 'react';
import { Link } from 'react-router-dom';

function SpringQuarter() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="text-stone-600 hover:text-stone-800 mb-8 inline-flex items-center gap-2 text-sm font-light transition-colors">
          <span>←</span> Back to Blog
        </Link>
        
        <article className="bg-white rounded-sm shadow-sm p-12">
          <img 
            src="/images/spring-quarter.jpg" 
            alt="Spring Quarter" 
            className="w-full h-80 object-cover rounded-sm mb-12"
          />
          
          <h1 className="text-4xl font-light text-stone-800 mb-4 leading-tight">2025 Spring Quarter Course Reflections</h1>
          <p className="text-stone-500 mb-12 font-light">Thoughts on STA108, ECN140, ECN162, ECN190, PSC150V</p>
          
          <div className="prose prose-lg prose-stone max-w-none">
            <h2 className="text-2xl font-light text-stone-800 mb-6 mt-8">Overview</h2>
            <p className="mb-6 leading-relaxed text-stone-600">
              This spring quarter at UC Davis has been an incredible journey of learning across multiple disciplines. 
              From advanced statistics to economics and political science, each course has contributed to my 
              interdisciplinary understanding of complex systems.
            </p>

            <h3 className="text-lg font-medium text-stone-700 mb-4 mt-6">STA108 - Applied Statistical Methods</h3>
            <p className="mb-6 leading-relaxed text-stone-600">
              This course deepened my understanding of regression analysis and statistical modeling. 
              The final project on population vs area analysis using Box-Cox transformations was particularly 
              enlightening, showcasing how proper data transformation can reveal hidden relationships.
            </p>

            <h3 className="text-lg font-medium text-stone-700 mb-4 mt-6">ECN140 - Econometrics</h3>
            <p className="mb-6 leading-relaxed text-stone-600">
              Building on my statistics knowledge, ECN140 introduced me to the practical applications of 
              econometric methods in real-world economic analysis. The course emphasized causal inference 
              and policy evaluation techniques.
            </p>

            <h3 className="text-lg font-medium text-stone-700 mb-4 mt-6">ECN162 - International Economic Relations</h3>
            <p className="mb-6 leading-relaxed text-stone-600">
              This course provided insights into global trade dynamics and international finance. 
              Understanding trade theories and their implications for policy has been crucial for my 
              economics major.
            </p>

            <h3 className="text-lg font-medium text-stone-700 mb-4 mt-6">ECN190 - Seminar in Economics</h3>
            <p className="mb-6 leading-relaxed text-stone-600">
              The seminar format allowed for deep dives into contemporary economic issues. 
              Presenting research and engaging in academic discussions has significantly improved 
              my analytical and communication skills.
            </p>

            <h3 className="text-lg font-medium text-stone-700 mb-4 mt-6">PSC150V - Research Methods</h3>
            <p className="mb-6 leading-relaxed text-stone-600">
              This political science course complemented my quantitative skills with qualitative 
              research methods. Learning about research design and methodology has been invaluable 
              for my interdisciplinary approach to problem-solving.
            </p>

            <h2 className="text-2xl font-light text-stone-800 mb-6 mt-12">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-3 mb-8 text-stone-600">
              <li>The importance of interdisciplinary thinking in solving complex problems</li>
              <li>How statistical and econometric methods can reveal insights in data</li>
              <li>The value of both quantitative and qualitative research approaches</li>
              <li>The interconnectedness of economics, politics, and data science</li>
            </ul>

            <p className="mb-6 leading-relaxed text-stone-600">
              Looking forward, I'm excited to apply these learnings in my future courses and research projects, 
              particularly in areas that combine computer science with economics and social sciences.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default SpringQuarter;