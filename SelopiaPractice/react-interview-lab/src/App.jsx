

import { useEffect, useRef, useState } from 'react'
import './App.css'
import initialJobs from './data/initialJobs';

function App() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {

    async function fetchJobs() {
      try {
        const jobs = await initialJobs();
        setJobs(jobs);

        if (query) {
          const filteredJobs = jobs.filter((job) => {
            const text = `${job.title} ${job.jobDescription}`.toLowerCase();
            return text.includes(query.toLowerCase());

          });
          setJobs(filteredJobs);

        }

      } catch (error) {
        console.log(error);
      }

    }
    fetchJobs();

  }, [query])



  return (
    <div>
      <h1>All Jobs</h1><br />
      <input type="text" value={query} onChange={event => setQuery(event.target.value)} ref={inputRef} onFocus={() => inputRef.current?.focus()} />
      {
        jobs.map(job => (
          <article key={job.id}>
            <h2>{job.title}</h2><br />
            <h3>{job.jobDescription}</h3><br />
            <h4>{job.jobLocation}</h4>
            <hr /><hr />

          </article>
        ))
      }
    </div>
  )
}

export default App
