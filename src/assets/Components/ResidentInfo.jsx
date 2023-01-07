import axios from 'axios';
import React, { useEffect, useState } from 'react';

<<<<<<< HEAD
const ResidentInfo = ({resident}) => {
    return (
        <div>
            <h1>Hola</h1>
            <h1>{resident[4]}</h1>
=======

const ResidentInfo = ({resident}) => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get(`${resident}`)
        .then(res => setPerson(res.data))
     ,[]})
    return (
        <div className='residentInfo'>
              <div>
             <img src={person.image} alt="" />
             <div>
                 <h2>{person.name}</h2>
                 <h2>{person.status} - {person.species}</h2>
             
            
                 <h2>{person.origin?.name}</ h2>

                 <h2>Episodes where appear</h2>
                 <h2>{person.episode?.length}</h2>
           
            

            </div>

            </div>
>>>>>>> e0908e8c03511884166e8f23662923188027cb08
        </div>
    );
};

export default ResidentInfo;