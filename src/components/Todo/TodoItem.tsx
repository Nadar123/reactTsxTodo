import React from 'react'
import {Item, RemoveItem} from './StyleTodoItem'

const TodoItem: React.FC<{text: string; onRemoveTodo: () => void }> = (props) => {
  return (
    <Item>
      {props.text} <br />
      <RemoveItem onClick={props.onRemoveTodo}>x</RemoveItem>
    </Item>
  )
}

export default TodoItem;
