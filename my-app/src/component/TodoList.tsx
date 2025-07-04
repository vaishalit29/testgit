import React from 'react'
import { Todo } from '../modal';
import SingleTodo from './SingleTodo';
import './InputFiled.css';

export interface Props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
   }

const TodoList:React.FC <Props>= ({todos ,setTodos}) => {
  return (
    <div className='todos'>
        {
  todos.map((todo)=>{
            return <SingleTodo key ={todo.id} todo={todo} todos={todos}  setTodos={setTodos} />
        })
        }  
        </div>
  )
}

export default TodoList;
