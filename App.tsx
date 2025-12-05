import React from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Culture from './pages/Culture';
import Food from './pages/Food';
import Traffic from './pages/Traffic';
import Invitation from './pages/Invitation';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-xiangqi-bg">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invitation" element={<Invitation />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/food" element={<Food />} />
            <Route path="/traffic" element={<Traffic />} />
            {/* Catch-all route: Redirect any unknown or manual paths back to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;