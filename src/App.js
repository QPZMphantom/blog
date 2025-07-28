import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import SpringQuarter from './pages/blog/SpringQuarter';
import InternshipReflection from './pages/blog/InternshipReflection';

function App() {
  return (
    <div className="App min-h-screen">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/spring-quarter" element={<SpringQuarter />} />
        <Route path="/blog/internship-reflection" element={<InternshipReflection />} />
      </Routes>

      <footer className="bg-white border-t border-stone-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-stone-600 font-light">© 2025 Zeying Li. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;