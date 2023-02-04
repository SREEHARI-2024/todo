
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo,setTodo]=useState('');
  const [todos,setTodos]=useState([]);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Enter the TODOs </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="Add item..." onKeyUp={(event) => event.key === 'Enter' ? setTodos([...todos,{id: Date.now(), text:todo ,status:false}], setTodo("")): null} />
        <button onClick={()=>setTodos([...todos,{id: Date.now(), text:todo ,status:false}], setTodo(""))} className='button-add'>ADD</button>
      </div>
      <div className="todos">
      {

        todos.map((obj)=>{
         return (<div className="todo" key={obj.id}>
          <div className="left">
            <input onChange={(e)=>{
              const newTodos = [...todos];
              newTodos.find((el) => el.id === obj.id).status = e.target.checked;
              setTodos(newTodos);
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <button  className='button-delete'>dlt</button>
          </div>
        </div>)
        
      })  }
      {todos.map((obj)=>{
        if(obj.status){
          return(<h1 key={obj.id}>{obj.text}</h1>)
        }
        return null
      })}
      </div>
    </div>  
  );
}

export default App;