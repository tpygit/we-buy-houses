import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import QuestionsPage from './pages/QuestionsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
