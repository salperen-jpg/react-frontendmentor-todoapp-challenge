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
export const reducer = (state, action) => {
  switch (action.type) {
    case GET_TODO:
      return { ...state, todo: action.payload };
    case HANDLE_SUBMIT:
      const newTodo = {
        id: state.todos.length + 1,
        title: state.todo,
        done: false,
      };
      return { ...state, todos: [...state.todos, newTodo], todo: '' };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case CHANGE_THEME:
      return { ...state, themeIcon: !state.themeIcon, theme: !state.theme };
    case SHOW_ALL:
      return { ...state, todos: state.todos, filtered: state.todos };
    case SHOW_ACTIVE:
      return {
        ...state,
        filtered: state.todos.filter((item) => item.done === false),
      };
    case SHOW_FINISHED:
      return {
        ...state,
        filtered: state.todos.filter((item) => item.done === true),
      };
    case STATUS_HANDLER:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            console.log(item.done);
            return {
              ...item,
              done: !item.done,
            };
          }
          return item;
        }),
      };

    default:
      return { ...state };
  }
};
