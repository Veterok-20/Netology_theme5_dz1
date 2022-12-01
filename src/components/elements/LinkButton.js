import React from 'react';

export default function LinkButton(props) {
    const { databtn } = props;
    return <a href={databtn.url} className="btn btn-primary">{databtn.text}</a>
}