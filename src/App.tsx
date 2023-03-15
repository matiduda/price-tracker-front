import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const fetchData = async (host: string) => {
  let response = await fetch(host, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
  let data = await response.json();
  console.log(data);
}

function App() {
  const [count, setCount] = useState(0);
  fetchData("http://localhost:8000/generate_plots");

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
