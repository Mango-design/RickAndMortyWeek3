import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Banner from './assets/components/banner'
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
     <Banner/>
     <h2>{dimensionType.name}</h2>
     <h2>{dimensionType.type}</h2>
     <h2>{dimensionType.dimension}</h2>
     <h2>{dimensionType.residents?.length}</h2>
    </div>
    
  )
}

export default App
