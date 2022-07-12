import React from 'react'
import Todo from '../../models/todo';
import TodoItem from '../Todo/TodoItem'
import {List} from './StyleTodos'

const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: number) => void}> = (props) => {
  return (
    <List>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} 
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
        )) }
    </List>
  )
}

export default Todos;