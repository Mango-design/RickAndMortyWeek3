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
     <h1>{dimensionType.name}</h1>
     <div className='dimension_actual'>
       
       <h2>{`Type: ${dimensionType.type}`}</h2>
       <h2>{`Dimension: ${dimensionType.dimension}`}</h2>
       <h2>{`Population: ${dimensionType.residents?.length}`}</h2>
       
      </div>
     
      < ChangeLocation random={random} setRandom={setRandom}/>
      <h2>{dimensionType.residents?.map(resident =>(
        <li key={resident}>
          {resident}

        </li>
      ))}</h2>
     
     
     
    
    </div>
    
  )
}

export default App
