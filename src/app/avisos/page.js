"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={`${styles.container}`}>
      <h1 className={styles.title}>Avisos</h1>
      <a href='/avisos/nuevo' className={styles.newJobLink}>Nuevo aviso</a>
      <ul className={styles.jobList}>
        {jobs.map(job => (
          <li key={job._id} className={styles.jobItem}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Home;