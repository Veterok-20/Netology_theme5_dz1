import React from 'react';

export default function Title(props) {   
    const {datatitle} =props;
    const Component = 'h' + datatitle.size;
    return <Component className="card-title">{datatitle.text}</Component>
}