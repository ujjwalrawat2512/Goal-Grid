
const getInitials = (name = '') =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();

const MatchCard = ({ match }) => {
  const {
    league = 'Premier League',
    homeTeam = 'Real Madrid',
    awayTeam = 'Barcelona',
    homeScore = 2,
    awayScore = 1,
    status = 'LIVE', // 'LIVE', 'FT', or an upcoming kickoff time like '19:30'
    minute = "67'",
  } = match || {};

  const isLive = status === 'LIVE';
  const isUpcoming = status === 'UPCOMING' || (!isLive && status !== 'FT' && status !== 'FINISHED');

  return (
    <div className="match-card">
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

      <div className="match-body">
        <div className="team-row">
          <div className="team-info">
            <div className="team-logo-placeholder">{getInitials(homeTeam)}</div>
            <span className="team-name">{homeTeam}</span>
          </div>
          <span className={`score ${isLive ? 'score-active' : ''}`}>
            {isUpcoming ? '-' : homeScore}
          </span>
        </div>

        <div className="team-row">
          <div className="team-info">
            <div className="team-logo-placeholder">{getInitials(awayTeam)}</div>
            <span className="team-name">{awayTeam}</span>
          </div>
          <span className={`score ${isLive ? 'score-active' : ''}`}>
            {isUpcoming ? '-' : awayScore}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
