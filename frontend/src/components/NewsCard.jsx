import React from 'react';

export const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img src={news.imageUrl} alt={news.title} className="news-card-img" />
      <div className="news-card-body">
        <div>
          <div className="news-card-meta">
            <span className="news-category">{news.category}</span>
            <span className="news-time">{news.time}</span>
          </div>
          <h3 className="news-title">{news.title}</h3>
          <p className="news-summary">{news.summary}</p>
        </div>
        <div className="news-card-footer">
          <button className="read-more-btn">Read Full Article →</button>
        </div>
      </div>
    </div>
  );
};