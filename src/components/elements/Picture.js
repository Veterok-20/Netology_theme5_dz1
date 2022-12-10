import React from 'react';
import PropTypes from 'prop-types';

export default function Picture(props) {
    const { datapicture } = props;
    if (datapicture.url === '') return null;
    return <img src={datapicture.url} className="card-img-top" alt={datapicture.alt}></img>
}

Picture.propTypes = {
    datapicture: PropTypes.objectOf(PropTypes.string)
  };

Picture.defaultProps = {
    url: '',     
} 