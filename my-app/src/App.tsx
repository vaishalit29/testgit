import React, { useState } from 'react';
import './App.css';
import InputFiled from './component/InputFiled';
import { Todo } from './modal';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleADD = (e: React.FormEvent) => {
    console.log(todos, "todo");
    e.preventDefault();
    if (todo) {
      setTodos([...todos, {
        id: Date.now(),
        isDone: false,
        todo: todo  },
      ])
      setTodo("")
    }

  }
  // console.log(todo);
  return (
    <div className="App">

      <div className="heading">Taskify</div>
      <InputFiled todo={todo} setTodo={setTodo} handleADD={handleADD} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
