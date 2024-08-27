import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;















/*
createContext({}): This function creates a new context object called TodoContext

Custom Hook: useTodo
useContext(TodoContext): This hook is used to consume the TodoContext. The useContext hook allows any component that calls useTodo() to access the current value of TodoContext.


*/
