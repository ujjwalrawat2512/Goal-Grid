import { useState } from 'react';
import MatchCard from '../components/MatchCard';

const initialMatches = [
  { id: 1, league: 'Premier League', homeTeam: 'Arsenal', awayTeam: 'Chelsea', homeScore: 2, awayScore: 1, status: 'LIVE', minute: "74'" },
  { id: 2, league: 'La Liga', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', homeScore: 0, awayScore: 0, status: 'UPCOMING', minute: '22:30 IST' },
  { id: 3, league: 'UEFA Champions League', homeTeam: 'Bayern Munich', awayTeam: 'PSG', homeScore: 3, awayScore: 2, status: 'FT', minute: 'FT' },
  { id: 4, league: 'Serie A', homeTeam: 'Inter Milan', awayTeam: 'Juventus', homeScore: 1, awayScore: 1, status: 'LIVE', minute: "52'" },
  { id: 5, league: 'Bundesliga', homeTeam: 'Bayer Leverkusen', awayTeam: 'Dortmund', homeScore: 0, awayScore: 0, status: 'UPCOMING', minute: '01:00 IST' },
  { id: 6, league: 'Ligue 1', homeTeam: 'PSG', awayTeam: 'Marseille', homeScore: 4, awayScore: 0, status: 'FT', minute: 'FT' },
];

const tabs = ['ALL', 'LIVE', 'UPCOMING', 'FT'];

export const Matches = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredMatches = initialMatches.filter((match) =>
    filter === 'ALL' ? true : match.status === filter
  );

  return (
    <div className="matches-page">
      <div className="matches-page-header">
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          <span className="title-indicator"></span>
          Match Center
        </h2>

        <div className="filter-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`filter-tab ${filter === tab ? 'active' : ''}`}
            >
              {tab === 'LIVE' && <span className="live-dot"></span>}
              {tab === 'FT' ? 'FINISHED' : tab}
            </button>
          ))}
        </div>
      </div>

      {filteredMatches.length === 0 ? (
        <div className="empty-state">No matches found for this filter.</div>
      ) : (
        <div className="matches-list">
          {filteredMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Matches;
