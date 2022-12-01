import React from 'react';

export default function Picture(props) {
    const { datapicture } = props;
    return <img src={datapicture.url} className="card-img-top" alt={datapicture.alt}></img>
}

