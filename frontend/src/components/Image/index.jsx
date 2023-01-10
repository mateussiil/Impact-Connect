import React, { useState } from 'react';

import './index.css'

const Image = ({alt, src}) => {
  const [error, setError] = useState(false);

  const onErrorImage = () => {
    setError(true);
  };

  return <img className='image' onError={onErrorImage} alt={alt} src={src}/>
}

export default Image;