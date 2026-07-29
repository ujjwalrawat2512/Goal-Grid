import React, { useState } from 'react';

const initialMatches = [
  { id: 1, league: 'Premier League', homeTeam: 'Arsenal', awayTeam: 'Chelsea', homeScore: 2, awayScore: 1, status: 'LIVE', time: "74'" },
  { id: 2, league: 'La Liga', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', homeScore: 0, awayScore: 0, status: 'UPCOMING', time: '22:30 IST' },
  { id: 3, league: 'UEFA Champions League', homeTeam: 'Bayern Munich', awayTeam: 'PSG', homeScore: 3, awayScore: 2, status: 'FINISHED', time: 'FT' },
  { id: 4, league: 'Serie A', homeTeam: 'Inter Milan', awayTeam: 'Juventus', homeScore: 1, awayScore: 1, status: 'LIVE', time: "52'" },
];

export const Matches = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredMatches = initialMatches.filter((match) => {
    if (filter === 'ALL') return true;
    return match.status === filter;
  });

  return (
    <div className="matches-page">
      <div className="flex-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          <span className="title-indicator"></span>
          Match Center
        </h2>

        {/* Dynamic Tabs Filter */}
        <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--bg-card)', padding: '0.3rem', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
          {['ALL', 'LIVE', 'UPCOMING', 'FINISHED'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                padding: '0.4rem 0.9rem',
                borderRadius: '7px',
                border: 'none',
                background: filter === tab ? 'var(--accent-green)' : 'transparent',
                color: filter === tab ? '#020617' : 'var(--text-muted)',
                fontWeight: '700',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tab === 'LIVE' ? <><span className="live-dot" style={{ marginRight: '5px' }}></span>LIVE</> : tab}
            </button>
          ))}
        </div>
      </div>

      <div className="matches-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredMatches.map((match) => (
          <div key={match.id} className="match-card" style={{ padding: '1.25rem' }}>
            <div className="match-league" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', marginBottom: '0.75rem' }}>
              {match.league}
            </div>
            <div className="match-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ flex: 1, textAlign: 'right', fontWeight: '700', fontSize: '1.1rem' }}>{match.homeTeam}</div>
              
              <div style={{ padding: '0 2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-green)' }}>
                  {match.status === 'UPCOMING' ? 'VS' : `${match.homeScore} - ${match.awayScore}`}
                </div>
                <span className={`status-badge ${match.status.toLowerCase()}`}>
                  {match.status === 'LIVE' ? `🔴 ${match.time}` : match.time}
                </span>
              </div>

              <div style={{ flex: 1, textAlign: 'left', fontWeight: '700', fontSize: '1.1rem' }}>{match.awayTeam}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;