import React from 'react';
import preloaderImg from '../../../assets/images/preloader.svg';

const Preloader = () => {
  return <img src={preloaderImg} alt="loading..." style={{ height: '15rem' }} />;
};

export default Preloader;
