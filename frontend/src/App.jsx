import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages Import
import Home from './pages/Home';
import Matches from './pages/Matches';
import Leagues from './pages/Leagues';
import News from './pages/News';
import Login from './pages/Login';
import Register from './pages/Register';

export function App() {
  return (
    <div className="app-container">
      <div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;