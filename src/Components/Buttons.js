import React from 'react';
import { useGlobalContext } from '../context';

const Buttons = () => {
  const { todos, showAll, showActive, showFinished } = useGlobalContext();
  return (
    <div className='btn-container'>
      <span>{todos.length} items left</span>
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
      <span>Clear Completed</span>
    </div>
  );
};

export default Buttons;
