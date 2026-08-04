
export const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img
        src={news.imageUrl}
        alt={news.title}
        className="news-card-img"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=600&q=80';
        }}
      />
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