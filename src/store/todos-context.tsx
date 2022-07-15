import React, { useState, useEffect } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

type Props = {
  children?: React.ReactNode;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: number) => {},
});

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodo = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
    localStorage.removeItem("todos");
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
