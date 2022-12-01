import React from 'react';

export default function Text(props) {
    const { datatext } = props;
    return <p className="card-text">{datatext.text}</p>
}