import React from 'react';
import { useGlobalContext } from '../context';

export const TodoForm = () => {
  const { getTodo, todo, handleSubmit } = useGlobalContext();
  return (
    <article className='todo-form'>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input'
          placeholder='Create a new todo....'
          value={todo}
          onChange={(e) => getTodo(e.target.value)}
        />
      </form>
    </article>
  );
};
