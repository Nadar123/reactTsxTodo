import React, { useContext } from "react";
import TodoItem from "../Todo/TodoItem";
import { List } from "./StyleTodos";
import { TodosContext } from "../../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <List>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </List>
  );
};

export default Todos;
