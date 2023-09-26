import React from 'react';
import Marquee from "react-fast-marquee";
import MappedData from './MappedData';

const Marque = () => {
  return (
    <div>
        <Marquee speed={60} gradient={false} style={{backgroundColor: '#94004F', color: 'white', height: '4rem'}}>
            <MappedData/>
        </Marquee>
    </div>
  )
}

export default Marque