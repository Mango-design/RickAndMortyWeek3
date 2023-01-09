import React, { useState } from 'react';

const ChangeLocation = ({random, setRandom}) => {
    const [location, setLocation] = useState("")
    return (
        <div className='changeLocation'>
            <input type="text" className='input' value={location} onChange={e=>setLocation(e.target.value)} placeholder='Type location Id' onKeyDown={(e) => {e.keyCode === 13 ? setRandom(location) : null}}/>
            <button onClick={()=>{setRandom(location)}} >Search</button>
            
            
        </div>
    );
};

export default ChangeLocation;