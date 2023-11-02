import { useState } from "react";


function App() {
  const [inp, setInput] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("listJobs"));
    return storageJobs ?? [];
  });

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, inp];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("listJobs", jsonJobs);
      return newJobs;
    })
    setInput('');
  }
  return (
    <div style={{ padding: 32 }}>
      <input
        value={inp}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>


      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>

  );
}

export default App;