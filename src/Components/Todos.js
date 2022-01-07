import React from 'react';
import { useGlobalContext } from '../context';
import Todo from './Todo';

const Todos = () => {
  const { todos } = useGlobalContext();
  // if (todos.length < 1) {
  //   return <div>There is no item</div>;
  // }

  return (
    <article className='todos'>
      {todos.map((todo) => {
        return <Todo key={todo.id} {...todo} />;
      })}
    </article>
  );
};

export default Todos;
