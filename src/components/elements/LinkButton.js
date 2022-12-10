import React from 'react';
import PropTypes from 'prop-types';


export default function LinkButton(props) {
    const { databtn } = props;
    if (databtn.text === '') return null;
    return <a href={databtn.url} className="btn btn-primary">{databtn.text}</a>
}

LinkButton.propTypes = {
    databtn: PropTypes.objectOf(PropTypes.string)
  };

LinkButton.defaultProps = {
    text: '',     
}