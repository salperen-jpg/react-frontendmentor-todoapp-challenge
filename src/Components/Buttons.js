import React from 'react';
import { useGlobalContext } from '../context';

const Buttons = () => {
  const { filtered, showAll, showActive, showFinished } = useGlobalContext();
  if (filtered.length < 1) {
    return <div className='warn'>There is no todo</div>;
  }
  return (
    <div className='btn-container'>
      <span>{filtered.length} items left</span>
      <div>
        <span className='info-btn' onClick={showAll}>
          All
        </span>
        <span className='info-btn' onClick={showActive}>
          Active
        </span>
        <span className='info-btn' onClick={showFinished}>
          Completed
        </span>
      </div>
      <span className='info-btn' onClick={showActive}>
        Clear Completed
      </span>
    </div>
  );
};

export default Buttons;
