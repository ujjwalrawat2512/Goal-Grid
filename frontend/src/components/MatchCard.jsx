import React from 'react';

const MatchCard = ({ match }) => {
  // Default fallback data agar props paas na ho
  const {
    league = 'Premier League',
    homeTeam = 'Real Madrid',
    awayTeam = 'Barcelona',
    homeScore = 2,
    awayScore = 1,
    status = 'LIVE', // 'LIVE', 'FT', या '19:30' (upcoming time)
    minute = "67'",
  } = match || {};

  const isLive = status === 'LIVE';

  return (
    <div className="match-card">
      {/* Match Header: League & Status */}
      <div className="match-header">
        <span className="match-league">{league}</span>
        {isLive ? (
          <span className="live-badge">
            <span className="pulse-dot"></span>
            {minute}
          </span>
        ) : (
          <span className="status-badge">{status}</span>
        )}
      </div>

      {/* Teams and Score Section */}
      <div className="match-body">
        {/* Home Team */}
        <div className="team-row">
          <div className="team-info">
            <div className="team-logo-placeholder"></div>
            <span className="team-name">{homeTeam}</span>
          </div>
          <span className={`score ${isLive ? 'score-active' : ''}`}>
            {homeScore}
          </span>
        </div>

        {/* Away Team */}
        <div className="team-row">
          <div className="team-info">
            <div className="team-logo-placeholder"></div>
            <span className="team-name">{awayTeam}</span>
          </div>
          <span className={`score ${isLive ? 'score-active' : ''}`}>
            {awayScore}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;