import React from 'react';

const leaguesData = [
  { id: 1, name: 'Premier League', country: 'England', teams: 20, logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { id: 2, name: 'La Liga', country: 'Spain', teams: 20, logo: '🇪🇸' },
  { id: 3, name: 'UEFA Champions League', country: 'Europe', teams: 32, logo: '🇪🇺' },
  { id: 4, name: 'Serie A', country: 'Italy', teams: 20, logo: '🇮🇹' },
  { id: 5, name: 'Bundesliga', country: 'Germany', teams: 18, logo: '🇩🇪' },
  { id: 6, name: 'Ligue 1', country: 'France', teams: 18, logo: '🇫🇷' },
];

export const Leagues = () => {
  return (
    <div className="leagues-page">
      <h2 className="section-title">
        <span className="title-indicator"></span>
        Featured Leagues & Competitions
      </h2>

      <div className="leagues-grid">
        {leaguesData.map((league) => (
          <div key={league.id} className="league-card">
            <div className="league-card-header">
              <span className="league-flag">{league.logo}</span>
              <div>
                <h3>{league.name}</h3>
                <p>{league.country}</p>
              </div>
            </div>
            <div className="league-card-footer">
              <span>{league.teams} Teams</span>
              <button className="view-btn">View Standings →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leagues;