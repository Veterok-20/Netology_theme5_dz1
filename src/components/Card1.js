import React from 'react';
// import TitleTextLink from './SetElements/TitleTextLink';
import Picture from './elements/Picture';
import Title from './elements/Title';
import Text from './elements/Text';
import LinkButton from './elements/LinkButton';



export default function Card1() {  
    
    return (
        <div className='card' style={{width: "18rem"}}>
            <Picture datapicture={datapicture} />
            <Title datatitle={datatitle} />
            <Text datatext={datatext} />
            <LinkButton databtn={databtn} />
            {/* <TitleTextLink datatitle={datatitlecard[0]} datatext={datatextcard[0]} databtn={databtncard[0]}></TitleTextLink> */}
        </div>
    )
}  