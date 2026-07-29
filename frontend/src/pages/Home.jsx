import React from 'react';
import { Hero } from '../components/Hero';
import { Sidebar } from '../components/Sidebar';
import { NewsCard } from '../components/NewsCard';

const sampleNews = [
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
  }
];

export const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <div className="home-grid">
        <section className="news-section">
          <h2 className="section-title">
            <span className="title-indicator"></span>
            Trending Football Stories
          </h2>
          <div className="news-grid">
            {sampleNews.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        </section>
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;