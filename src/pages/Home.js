import React from 'react';

function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <img 
            src="/images/avatar.jpg" 
            alt="Zeying Li" 
            className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-xl"
          />
          <h1 className="text-5xl font-light text-stone-800 mb-4">Zeying Li</h1>
          <p className="text-xl text-stone-600 mb-6 font-light">UC Davis | Computer Science & Economics</p>
          <p className="text-lg text-stone-700 max-w-2xl mx-auto leading-relaxed font-light">
            I love building intelligent apps, exploring markets, and solving real‑world problems using code and logic.
          </p>
        </div>

        <div className="bg-white rounded-sm shadow-sm p-10 mt-16">
          <h2 className="text-2xl font-light text-stone-800 mb-8 text-center">Get in Touch</h2>
          <div className="space-y-6 text-center">
            <p className="text-stone-600 font-light">
              If you'd like to get in touch, feel free to email me or find me on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:lzy30126073@gmail.com" 
                className="text-stone-700 hover:text-stone-900 transition-colors font-light"
              >
                lzy30126073@gmail.com
              </a>
              <a 
                href="https://github.com/QPZMphantom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-700 hover:text-stone-900 transition-colors font-light"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;