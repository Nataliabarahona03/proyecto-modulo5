// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Players from './pages/Players';
import ErrorPage from './pages/ErrorPage';
import ErrorBoundary from './ErrorBoundary'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);
