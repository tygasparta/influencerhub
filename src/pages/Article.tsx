import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import articles from '@/data/articles.json';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles[parseInt(id, 10)];
  if (!article) return <div className="p-8 text-center">Article not found.</div>;
  return (
    <section className="py-16 min-h-screen bg-muted/50">
      <div className="container mx-auto px-4 max-w-2xl">
        <button onClick={() => navigate(-1)} className="mb-6 text-blue-600 hover:underline">&larr; Back to Articles</button>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="mb-2 text-gray-700 font-medium">By {article.authorTitle || article.author}</div>
        {article.publication && <div className="mb-2 text-gray-500 italic">{article.publication}</div>}
        <div className="mb-4 flex flex-wrap gap-2">
          {article.categories && article.categories.map((cat, i) => (
            <span key={i} className="bg-gray-200 text-xs px-2 py-1 rounded-full font-semibold">{cat}</span>
          ))}
          {article.tags && article.tags.map((tag, i) => (
            <span key={i} className="bg-blue-100 text-xs px-2 py-1 rounded-full font-semibold">{tag}</span>
          ))}
        </div>
        <article className="prose prose-lg max-w-none bg-white/90 rounded-xl p-6 shadow-lg">
          {article.content.split('\n').map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Article; 