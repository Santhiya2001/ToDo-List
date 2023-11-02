import React, { useState } from "react";
function Todoform(props) {


    const [input, setInput] = useState('');
const handleChange = e=>{
    setInput(e.target.value);
};

    const handleSubmit = e => {
        e.preventDefault();
     props.onSubmit({
           id: Math.floor(Math.random() * 2000),
           text: input
       });
      setInput('');
    };
    return (

        <form className='Todoform' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Add a Todo'
            value={input}
                name='text'
                className='todo-input' 
                onChange={handleChange}/>
            <button className='todo-btn'>Add Todo</button>
        </form>
    )
}
export default Todoform