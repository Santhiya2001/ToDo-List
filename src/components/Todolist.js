import React, { useState } from 'react'
import Todoform from './Todoform';

function Todolist(){

    const[todos, setTodos] = useState([]);
    const addTodo =todo =>{
        if(!todo.text||/^$*$/.text(todo.test)){
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(todo,...todos);
    };
    return(
        <div>
            <h1>What's the plan for Today</h1>
            <Todoform onSubmit={addTodo}/>
            </div>
    );
}
export default Todolist;