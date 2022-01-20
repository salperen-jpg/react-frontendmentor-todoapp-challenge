import React from 'react';
import { TodoForm } from './TodoForm';
import TodoNavBar from './TodoNavBar';
import TodoUtils from './TodoUtils';

const TodoContainer = () => {
  return (
    <article className='todo-container'>
      <TodoNavBar />
      <TodoForm />
      <TodoUtils />
    </article>
  );
};

export default TodoContainer;
