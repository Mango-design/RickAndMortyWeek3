import React, { useState } from 'react';

const ChangeLocation = ({random, setRandom}) => {
    const [location, setLocation] = useState("")
    return (
        <div>
            <input type="text" value={location} onChange={e=>setLocation(e.target.value)} placeholder='Type location Id' />
            <button onClick={()=>{setRandom(location)}} >Search</button>
            <p>El input es: {location}</p>
            
        </div>
    );
};

export default ChangeLocation;