import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    {
      slug: 'spring-quarter',
      title: '2025 Spring Quarter Course Reflections',
      date: 'Thoughts on STA108, ECN140, ECN162, ECN190, PSC150V',
      image: '/images/spring-quarter.jpg',
      path: '/blog/spring-quarter',
    },
    {
      slug: 'internship-reflection',
      title: 'What I Learned from My Computer Vision Internship',
      date: 'July 8, 2025',
      image: '/images/computer_city.jpeg',
      path: '/blog/internship-reflection',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-light text-stone-800 mb-6">The Blog</h1>
          <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
            Thoughts on technology, economics, education, and life at UC Davis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={post.path}
              className="block"
            >
              <article className="bg-white rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-light mb-3 text-stone-800 group-hover:text-stone-900 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-stone-500 font-light">{post.date}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            More posts coming soon! Follow me on GitHub to stay updated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;