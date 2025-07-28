import React from 'react';

function Hobbies() {
  const hobbies = [
    {
      title: 'Swimming',
      description: 'Finding peace in the water. Swimming has taught me discipline, persistence, and the importance of proper breathing technique - both in the pool and in life.',
    },
    {
      title: 'Basketball',
      description: 'Learning teamwork and strategy on the court. Basketball has shown me the value of quick decision-making, spatial awareness, and trusting your teammates.',
    },
    {
      title: 'Guitar',
      description: 'Expressing emotions through music. Playing guitar allows me to explore creativity, develop patience through practice, and connect with others through shared melodies.',
    },
    {
      title: 'Go/Weiqi',
      description: 'Ancient wisdom on a 19x19 board. This strategic game has enhanced my pattern recognition, long-term planning abilities, and appreciation for elegant solutions.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Hobbies & Interests</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="mb-8 grid md:grid-cols-2 gap-4">
            <img 
              src="/images/swimming.jpg" 
              alt="Swimming" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <img 
              src="/images/weiqi.jpg" 
              alt="Go/Weiqi" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Beyond academics and coding, I believe in maintaining a balanced life through various activities that challenge different aspects of my mind and body. Here are some of my favorite ways to spend time outside of work:
          </p>

          <div className="grid gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-2xl font-semibold mb-2">
                  {hobby.title}
                </h3>
                <p className="text-gray-700">{hobby.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Why These Hobbies Matter</h3>
            <p className="text-gray-700">
              Each of these activities contributes to my personal growth in unique ways. Swimming builds physical endurance and mental clarity. Basketball teaches real-time collaboration. Guitar nurtures creative expression. Go develops strategic thinking that directly applies to algorithm design and system architecture. Together, they help me maintain a well-rounded perspective that enhances my work in technology and economics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;