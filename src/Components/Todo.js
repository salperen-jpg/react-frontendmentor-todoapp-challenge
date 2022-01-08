import React from 'react';
import cross from '../images/icon-cross.svg';
import { useGlobalContext } from '../context';
import checked from '../images/icon-check.svg';
const Todo = ({ id, title, done }) => {
  const { deleteTodo, statusHandler } = useGlobalContext();
  return (
    <div className='todo'>
      <div className='inner-todo'>
        <div
          className={`${done ? 'status status-bg' : 'status'}`}
          onClick={() => statusHandler(id)}
        >
          {done && <img src={checked} alt='checked' className='checked' />}
        </div>
        <p className={`${done ? 'title highlight' : 'title'}`}>{title}</p>
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
