import React, { useRef } from 'react'
import './InputFiled.css';
import TodoList from './TodoList';
import { Todo } from '../modal';
// import { Props } from '../modal';

export interface Props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleADD:(e:React.FormEvent)=> void;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
};
const InputFiled:React.FC <Props>  = ({todo , setTodo,handleADD,setTodos ,todos}) => {
 const inputRef = useRef<HTMLInputElement>(null);
  return (<div>
   <form className="input" onSubmit ={(e) =>{
    handleADD(e);
    inputRef.current?.blur();
   }}>
  <input type="input" 
  ref={inputRef} 
  className="input_box"
  value={todo}
  onChange={(e) =>setTodo(e.target.value)}
  placeholder="Enter a task" 
    />
  <button  className="input_Submit" >GO</button>
    </form>
    <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
};

export default InputFiled;

