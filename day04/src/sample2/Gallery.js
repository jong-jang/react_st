import React, { useState } from 'react';
import GalleryText from './GalleryText';
import GalleryView from './GalleryView';
import '../assets/css/reset.css';
import './style.css';
import dataList from '../assets/api/catData'

const Gallery = () => {
    const [data, setData] = useState(dataList)
    const [cat, setCat] = useState(data[0])

    const onView = (id) => {
        // setCat(data[id-1])
        // find
        setCat(data.findIndex(item => item.id === id));
    }
    
    return (
        <div className="wrap">
            <GalleryView data={data} cat={cat} onView={onView}/>
            <GalleryText cat={cat}/>
        </div>
    );
};

export default Gallery;