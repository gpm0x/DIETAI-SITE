import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import VideoDemo from './pages/VideoDemo';
import Dashboard from './pages/Dashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/video" element={<VideoDemo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/privacidade" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
