
const topLeagues = [
  { id: 1, name: 'Premier League', country: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England', matches: 3 },
  { id: 2, name: 'La Liga', country: '🇪🇸 Spain', matches: 2 },
  { id: 3, name: 'UEFA Champions League', country: '🇪🇺 Europe', matches: 4 },
  { id: 4, name: 'Serie A', country: '🇮🇹 Italy', matches: 1 },
  { id: 5, name: 'Bundesliga', country: '🇩🇪 Germany', matches: 2 },
];

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Top Leagues Section */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">
          <span className="title-indicator"></span>
          Top Leagues
        </h3>
        <ul className="sidebar-list">
          {topLeagues.map((league) => (
            <li key={league.id} className="sidebar-item">
              <div className="league-info">
                <span className="league-name">{league.name}</span>
                <span className="league-country">{league.country}</span>
              </div>
              <span className="badge">{league.matches} Live</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Stats / Mini Widget */}
      <div className="sidebar-card highlight">
        <h4>⚡ Quick Match Alert</h4>
        <p>Real Madrid vs Barcelona starts in 45 minutes!</p>
        <button
          className="sidebar-action-btn"
          onClick={() => alert('Reminder set! We will notify you before kickoff.')}
        >
          Set Reminder
        </button>
      </div>
    </aside>
  );
};