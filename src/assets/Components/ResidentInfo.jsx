import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ResidentInfo = ({ resident }) => {
    const [person, setPerson] = useState({})



    useEffect(() => {
        axios.get(`${resident}`)
            .then(res => setPerson(res.data))

    }, [])
    let color = "";
    switch (person.status) {
        case 'Dead':
            color = 'red';
            break;
        case 'Alive':
            color = 'green';
            break;
        default:
            color = 'gray';
    }
    return (
        <div className='residentInfo'>
            <div className='residentInfo_card'>
                <img src={person.image} alt="" />
                <div>
                    <h2>{person.name}</h2>
                    <h2 className='status'>
                        <i class="fa-solid fa-circle" style={{ color: color }}></i> {person.status} - {person.species}</h2>



                    <h2><span>Origen</span> {person.origin?.name}</ h2>


                    <h2><span>Apariciones</span> {person.episode?.length}</h2>



                </div>

            </div>
        </div>
    );
};

export default ResidentInfo;