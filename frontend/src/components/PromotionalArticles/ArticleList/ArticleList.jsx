import React from 'react';
import './ArticleList.css';

const articles = [
  { 
    id: 1, 
    title: "Top 6 Benefits of Regular Oil Changes for Your Car's Engine Health", 
    image: "",
    link: "#"
  },
  { 
    id: 2, 
    title: "How to Check and Maintain Your Vehicle's Oil Levels: A Step-by-Step Guide", 
    image: "",
    link: "#"
  },
  { 
    id: 3, 
    title: "How to Check and Maintain Your Vehicle's Oil Levels: A Step-by-Step Guide", 
    image: "",
    link: "#"
  }
];

const ArticleList = () => (
  <section className="article-list">
    {articles.map(article => (
      <div key={article.id} className="article-item">
        <img src={article.image} alt={article.title} />
        <h3>{article.title}</h3>
        <a href={article.link}>Read More</a>
      </div>
    ))}
  </section>
);

export default ArticleList;
