import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function JobListingsPage() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>
                        <Link to={`/jobs/${job._id}`}>{job.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobListingsPage;
