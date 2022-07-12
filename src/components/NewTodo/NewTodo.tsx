import React, {useRef, useState} from 'react';
import {Form, Input, SubmitButton, Error} from './StyleNewTodo';


const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
    const [error, setError] = useState('');

    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoInputRef.current!.value;
        if(enteredText.trim().length === 0) {
            return setError('plz file the your input with task')
        }

        props.onAddTodo(enteredText);
        if( null !== todoInputRef.current) {
            todoInputRef.current.value = '';
            setError('');
        }
    }

  return (
    <>
    <Form onSubmit={submitHandler} >
        <label htmlFor="text"> </label>
        <Input 
            type="text" 
            id="text" 
            ref={todoInputRef}       
            placeholder="Add a tesk"/>
            {error && <Error>{error}</Error>}
        <SubmitButton type='submit' > Submit Your Task</SubmitButton>
    </Form>
    </>
  )
}

export default NewTodo;