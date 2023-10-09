import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './Navbar';
import SchoolInfoCard from './SchoolInfoCard';
import Dashboard from './Dashboard';
import logo from './duara-logo-text.png';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        
        <SchoolInfoCard />

        <Routes>
          <Route path="/kpi" element={<Dashboard section="kpi" />} />
          <Route path="/financial" element={<Dashboard section="financial" />} />
          <Route path="/progress" element={<Dashboard section="progress" />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
