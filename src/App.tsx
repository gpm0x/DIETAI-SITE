import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import LandingPage from './pages/LandingPage';

// A pagina legal sai do bundle da pagina de vendas.
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

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
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
