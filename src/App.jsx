import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Banner from './assets/components/Banner'
import axios from 'axios'
import './App.css'
import ChangeLocation from './assets/Components/ChangeLocation'
import ResidentInfo from './assets/Components/ResidentInfo'
import Title from './assets/Components/Title'

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
     <Banner/>
     <h1>{dimensionType.name}</h1>
     <div className='dimension_actual'>
       
       <h2>{`Type: ${dimensionType.type}`}</h2>
       <h2>{`Dimension: ${dimensionType.dimension}`}</h2>
       <h2>{`Population: ${dimensionType.residents?.length}`}</h2>
       
      </div>
     
      <ChangeLocation random={random} setRandom={setRandom}/>
      {dimensionType.residents?.map(resident =>(
        
        <ResidentInfo  resident={resident} key={resident}/>
      ))}
      
     
     < Title />
     

    
    </div>
    
  )
}

export default App
