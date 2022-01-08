import React from 'react';
import { useGlobalContext } from '../context';

const Hero = () => {
  const { theme } = useGlobalContext();
  return <article className={`${theme ? 'hero' : 'hero-dark'}`}></article>;
};

export default Hero;
