import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import './App.css'; 

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">Movie App</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Movies</Link>
        </div>
      </nav>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="*" element={<h1 className="not-found-title">404 - Movie Not Found!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;