import React from 'react';
import cabecera from '../images/bannerr.png'
import '../../../public/App.css'
const Banner = () => {
    return (
        <div>
            <img className='ban' src={cabecera} />
        </div>
    );
};

export default Banner;