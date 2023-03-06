import React, { useEffect, useState } from 'react';
import datas from '../datas/appartList'

const Gallery = () => {
  const list = datas
    
  return (
    <div>
        {list.map(()=>{
            <li>{list.title}</li>
        },)}
    </div>
      
    );
};

export default Gallery;