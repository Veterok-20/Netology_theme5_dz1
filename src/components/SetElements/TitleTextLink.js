import React from "react";
import Title from '../elements/Title';
import Text from "../elements/Text";
import LinkButton from "../elements/LinkButton";



export default function TitleTextLink(props) {
    const { datatitle, datatext, databtn } = props;
    
    return (
        <div className="card-body">            
            <Title datatitle={datatitle}></Title>           
            <Text datatext={datatext} ></Text>
            <LinkButton databtn={databtn} ></LinkButton>
        </div>
    )
}       