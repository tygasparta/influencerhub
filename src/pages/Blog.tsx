import React from 'react';
import { useNavigate } from 'react-router-dom';
import articles from '@/data/articles.json';

const Blog = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 min-h-screen bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Daily Journalism</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
              <div>
                <div className="mb-2 flex flex-wrap gap-2">
                  {article.categories && article.categories.map((cat, i) => (
                    <span key={i} className="bg-gray-200 text-xs px-2 py-1 rounded-full font-semibold">{cat}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <div className="text-gray-600 text-sm mb-2">By {article.authorTitle || article.author}</div>
                <p className="text-gray-700 text-base mb-4 line-clamp-4">{article.content.split('\n').slice(0, 3).join(' ') + '...'}</p>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => navigate(`/article/${idx}`)}
              >
                Read Article
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 