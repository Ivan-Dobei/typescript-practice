import React, {FC} from 'react'
import {ITodo} from '../types/types'

interface TodoItemProps {
   todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
   return (
      <div>
         <input type='checkbox' checked={todo.completed}/>
         <span style={{marginRight: 10}}>{todo.id}</span>
         <span>{todo.title}</span>
      </div>
   )
}

export default TodoItem