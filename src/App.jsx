import { useState } from 'react'

import './App.css'
import DataDisplay from './DataDisplay'

function App() {
 //const [count, setCount] = useState(0)
 const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <h1>React Network Request</h1>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Fetch Data'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <DataDisplay data={data} />
    </>
  )
}

export default App
