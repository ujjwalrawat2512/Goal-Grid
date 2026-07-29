import React from 'react';

const matchesList = [
  {
    id: 1,
    league: 'Premier League',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    homeScore: 2,
    awayScore: 1,
    status: 'LIVE',
    time: "74'",
  },
  {
    id: 2,
    league: 'La Liga',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    homeScore: 0,
    awayScore: 0,
    status: 'UPCOMING',
    time: '22:30 IST',
  },
  {
    id: 3,
    league: 'UEFA Champions League',
    homeTeam: 'Bayern Munich',
    awayTeam: 'PSG',
    homeScore: 3,
    awayScore: 2,
    status: 'FINISHED',
    time: 'FT',
  },
];

export const Matches = () => {
  return (
    <div className="matches-page">
      <h2 className="section-title">
        <span className="title-indicator"></span>
        Match Center & Fixtures
      </h2>

      <div className="matches-list">
        {matchesList.map((match) => (
          <div key={match.id} className="match-card">
            <div className="match-league">{match.league}</div>
            
            <div className="match-body">
              <div className="team home">
                <span className="team-name">{match.homeTeam}</span>
              </div>

              <div className="match-score-box">
                {match.status === 'UPCOMING' ? (
                  <span className="match-time-badge">{match.time}</span>
                ) : (
                  <span className="score">
                    {match.homeScore} - {match.awayScore}
                  </span>
                )}
                <span className={`status-badge ${match.status.toLowerCase()}`}>
                  {match.status === 'LIVE' ? `🔴 ${match.time}` : match.status}
                </span>
              </div>

              <div className="team away">
                <span className="team-name">{match.awayTeam}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;