import React from 'react';
import cross from '../images/icon-cross.svg';
import { useGlobalContext } from '../context';
const Todo = ({ id, title, done }) => {
  const { deleteTodo } = useGlobalContext();
  return (
    <div className='todo'>
      <div className='inner-todo'>
        <h3>{title}</h3>
        <img
          src={cross}
          alt=''
          className='icon'
          onClick={() => deleteTodo(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
