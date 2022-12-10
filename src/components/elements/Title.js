import React from 'react';
import PropTypes from 'prop-types';

export default function Title(props) {   
    const {datatitle} =props;
    if (datatitle.text === '') return null;
    const Component = 'h' + datatitle.size;
    return <Component className="card-title">{datatitle.text}</Component>
}

Title.propTypes = {
    datatitle: PropTypes.objectOf(PropTypes.string)
  };

Title.defaultProps = {
    text: '',     
}