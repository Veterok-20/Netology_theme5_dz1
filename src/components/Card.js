import React from 'react';
import Picture from './elements/Picture';
import Title from './elements/Title';
import Text from './elements/Text';
import LinkButton from './elements/LinkButton';
import TitleTextLink from './SetElements/TitleTextLink';


export default function Card(props) {  
 const {datapicture, datatitle, datatext, databtn} = props;   
    return (
        <div className='card' style={{width: "18rem"}}>
            <Picture datapicture={datapicture} />
            <div className="card-body">  
            <Title datatitle={datatitle} />
            <Text datatext={datatext} />
            <LinkButton databtn={databtn} /> 
            </div>
            {/* <TitleTextLink datatitle={datatitle} datatext={datatext} databtn={databtn}></TitleTextLink>             */}
        </div>
    )
}   