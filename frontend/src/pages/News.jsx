import { NewsCard } from '../components/NewsCard';

const allNews = [
  {
    id: '1',
    title: 'Champions League Quarter-Final Draw Announced',
    category: 'UCL News',
    time: '2 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
    summary: 'The top clubs in Europe get set for crucial knockout encounters in the upcoming quarter-final round.',
  },
  {
    id: '2',
    title: 'Top Scorer Race Heats Up Heading Into Final Matchday',
    category: 'Analysis',
    time: '5 hours ago',
    imageUrl: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=600&q=80',
    summary: 'A deep dive into the underlying xG stats of Europe’s most elite strikers this season.',
  },
  {
    id: '3',
    title: 'Summer Transfer Window: Tactical Breakdown',
    category: 'Transfers',
    time: '1 day ago',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80',
    summary: 'Key positions clubs are aiming to reinforce ahead of the upcoming pre-season campaign.',
  }
];

export const News = () => {
  return (
    <div className="news-page">
      <h2 className="section-title">
        <span className="title-indicator"></span>
        Latest Football News & Insights
      </h2>

      <div className="news-grid">
        {allNews.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
};

export default News;