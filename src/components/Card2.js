import React from "react";
import TitleTextLink from "./SetElements/TitleTextLink";
import datatitlecard from "../datatitle.json";
import datatextcard from "../datatext.json";
import databtncard from "../databtn.json";

export default function Card2() {
    return (
        <div className='card' style={{width: "18rem"}}>
            <TitleTextLink datatitle={datatitlecard[1]} datatext={datatextcard[1]} databtn={databtncard[1]}></TitleTextLink>
        </div>
    )
}