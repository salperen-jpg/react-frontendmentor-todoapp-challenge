import React from 'react';
import { TodoForm } from './TodoForm';
import TodoNavBar from './TodoNavBar';
import Todos from './Todos';
import Buttons from './Buttons';

const TodoContainer = () => {
  return (
    <article className='todo-container'>
      <TodoNavBar />
      <TodoForm />
      <Todos />
      <Buttons />
    </article>
  );
};

export default TodoContainer;
