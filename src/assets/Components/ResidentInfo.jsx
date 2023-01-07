import axios from 'axios';
import React, { useEffect, useState } from 'react';


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
        </div>
    );
};

export default ResidentInfo;