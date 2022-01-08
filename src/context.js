import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';
import data from './data';
import {
  GET_TODO,
  HANDLE_SUBMIT,
  DELETE_TODO,
  CHANGE_THEME,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_FINISHED,
  STATUS_HANDLER,
} from './actions';
const initialState = {
  todos: [...data],
  isLoading: false,
  theme: true,
  themeIcon: true,
  todo: '',
  filtered: [...data],
};
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTodo = (input) => {
    dispatch({ type: GET_TODO, payload: input });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: HANDLE_SUBMIT });
  };
  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };
  const changeTheme = () => {
    dispatch({ type: CHANGE_THEME });
  };
  const showAll = () => {
    dispatch({ type: SHOW_ALL });
  };
  const showActive = () => {
    dispatch({ type: SHOW_ACTIVE });
  };
  const showFinished = () => {
    dispatch({ type: SHOW_FINISHED });
  };
  const statusHandler = (id) => {
    dispatch({ type: STATUS_HANDLER, payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        getTodo,
        handleSubmit,
        deleteTodo,
        changeTheme,
        showAll,
        showActive,
        showFinished,
        statusHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
