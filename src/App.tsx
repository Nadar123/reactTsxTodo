import Todos from './components/Todos/Todos'
import Todo from './models/todo';
import Header from './components/Header/Header'
import NewTodo from './components/NewTodo/NewTodo'
import { useState, useEffect } from 'react';
import {AppWrapper, AppContent} from './StyleApp'



function App() {
  const [todos, setTodos] = useState<Todo[]>(() =>  {
    const localData = localStorage.getItem('todos');
     return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
    
  }
  const removeTodo = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId) 
    })
    localStorage.removeItem('todos');
  }

  return (
    <AppWrapper>
      <AppContent>
        <Header/>
        <NewTodo onAddTodo={addTodoHandler} />
        <Todos items={todos} onRemoveTodo={removeTodo}/>
      </AppContent>
    </AppWrapper>
  );
}

export default App;