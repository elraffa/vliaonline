"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Avisos</h1>
      <a href='/avisos/nuevo'>Nuevo aviso</a>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;