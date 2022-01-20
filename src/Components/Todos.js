import React from 'react';
import { useGlobalContext } from '../context';
import Todo from './Todo';

const Todos = () => {
  const { filtered } = useGlobalContext();
  return (
    <article className='todos'>
      {filtered.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </article>
  );
};

export default Todos;
