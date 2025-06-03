import React from 'react'
import { Todo } from '../modal';
import './InputFiled.css';
import { AiFillEdit ,AiFillDelete } from 'react-icons/ai';
import { MdDone } from "react-icons/md";


interface Props {
    todo: Todo,
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC <Props> = ({ todo, todos, setTodos })=> {
    return (
        <form className='todos_Single'>
            <span className="todos_single_text">
                 {todo.id}
            {todo.todo}
            {todo.isDone}
                <span className="icon"><AiFillEdit /></span>
                <span className="icon"><AiFillDelete /></span>
                <span className="icon"><MdDone /></span>
                </span>
           
        </form>
    )
}

export default SingleTodo;
