import React from 'react';
import Todos from './Todos';
import Buttons from './Buttons';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const TodoUtils = () => {
  const { filtered, isLoading } = useGlobalContext();
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Todos />
      <Buttons />
    </div>
  );
};

export default TodoUtils;
