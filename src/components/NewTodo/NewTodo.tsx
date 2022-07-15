import React, { useRef, useState, useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import { Form, Input, SubmitButton, Error } from "./StyleNewTodo";

const NewTodo: React.FC = () => {
  const [error, setError] = useState("");
  const todosCtx = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return setError("plz file the your input with task");
    }
    todosCtx.addTodo(enteredText);

    if (null !== todoInputRef.current) {
      todoInputRef.current.value = "";
      setError("");
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <label htmlFor="text"> </label>
        <Input
          type="text"
          id="text"
          ref={todoInputRef}
          placeholder="Add a tesk"
        />
        {error && <Error>{error}</Error>}
        <SubmitButton type="submit"> Submit Your Task</SubmitButton>
      </Form>
    </>
  );
};

export default NewTodo;
