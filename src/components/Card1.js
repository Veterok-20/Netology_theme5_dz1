import React from 'react';
import TitleTextLink from './SetElements/TitleTextLink';
import Picture from './elements/Picture';
import datatitlecard from "../datatitle.json";
import datatextcard from "../datatext.json";
import databtncard from "../databtn.json";
import datapicture from "../datapicture.json";

export default function Card1() {  
    
    return (
        <div className='card' style={{width: "18rem"}}>
            <Picture datapicture={datapicture} />
            <TitleTextLink datatitle={datatitlecard[0]} datatext={datatextcard[0]} databtn={databtncard[0]}></TitleTextLink>
        </div>
    )
} 