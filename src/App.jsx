import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'

function App() {

  const [dimensionType, setDimensionType] = useState({})




  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setDimensionType(res.data));
  }, []);

  return (
    <div className="App">
      <h1>{dimensionType?.results?.name}</h1>
    </div>
  )
}

export default App
