import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobListingsPage from './pages/JobListingsPage';
import JobDetailPage from './pages/JobDetailPage';
import EmployerDashboard from './pages/EmployerDashboard';
import CandidateDashboard from './pages/CandidateDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobListingsPage />} />
                <Route path="/jobs/:id" element={<JobDetailPage />} />
                <Route path="/employer" element={<EmployerDashboard />} />
                <Route path="/candidate" element={<CandidateDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
