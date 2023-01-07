import React, { useState } from 'react';

const ChangeLocation = ({random, setRandom}) => {
    const [location, setLocation] = useState("")
    return (
        <div className='changeLocation'>
            <input type="text" className='input' value={location} onChange={e=>setLocation(e.target.value)} placeholder='Type location Id' />
            <button onClick={()=>{setRandom(location)}} >Search</button>
            
            
        </div>
    );
};

export default ChangeLocation;