import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Banner from './assets/components/banner'
import axios from 'axios'
import './App.css'
import ChangeLocation from './assets/Components/ChangeLocation'


function App() {

  const [dimensionType, setDimensionType] = useState({})
  const id = Math.floor(Math.random() * 126) + 1
  const [random, setRandom] = useState(id)



  
  useEffect(() => {
           
   axios.get(`https://rickandmortyapi.com/api/location/${random}`)
   .then((res) => setDimensionType(res.data));
  }, [random]);
 
 

  return (
    <div className="App">
     <h2>{dimensionType.name}</h2>
     <h2>{dimensionType.type}</h2>
     <h2>{dimensionType.dimension}</h2>
     <h2>{dimensionType.residents?.length}</h2>
     < ChangeLocation random={random} setRandom={setRandom}/>
     
     
     <Banner/>
    
    </div>
    
  )
}

export default App
