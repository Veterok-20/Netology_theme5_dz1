import React from 'react';
import PropTypes from 'prop-types';


export default function Text(props) {
    const { datatext } = props;
    if (datatext.text === '') return null;
    return <p className="card-text">{datatext.text}</p>
}

Text.propTypes = {
    text: PropTypes.string
  };

Text.defaultProps = {
    text: '',     
}