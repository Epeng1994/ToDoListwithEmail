import './App.css';
import { useState } from 'react';




function App() {
  const [tasks,setTasks] = useState(['Do Homework','Laundry'])
  const [newTask,setNewTask] = useState('')

  /*
    User can enter new tasks via form, hold in state
    User can check/complete tasks, remove from list?
    Form to take in input for tasks to be stored within state, div to render out current tasks

  */
  const onNewTaskSubmit = e =>{
    e.preventDefault()
    setTasks([...tasks,newTask])
  }

  const newTaskEntry = e =>{
    setNewTask(e.target.value)
  }


  return (
    <div>
      <form onSubmit={onNewTaskSubmit}>
        <label for = 'taskEntry'>Enter new task</label>
        <input value = {newTask} name = 'taskEntry' type='text' onChange = {newTaskEntry} onFocus = {()=>setNewTask('')}/>
        <button>Submit</button>
      </form>
      
      {
        tasks.map(a=>{
          return(
            <div>{a}</div>
          )
        })
      }

    </div>
  );
}

export default App;
