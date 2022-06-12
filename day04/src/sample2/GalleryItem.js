import React from 'react';

const GalleryItem = ({item, onView}) => {
    // 비구조할당
    const {id, imgurl, title} = item
    
    return (
        <li onClick={() => onView(id)}>
            <img src={imgurl} alt={title} />
        </li>
    );
};

export default GalleryItem;