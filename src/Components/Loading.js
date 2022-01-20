import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
const Loading = () => {
  const { closeLoading } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeLoading();
    }, 1000);
    return () => clearInterval(timeout);
  });
  return (
    <div className='loading-container'>
      <div className='loading'></div>
    </div>
  );
};

export default Loading;
