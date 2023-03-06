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


  const clearTasks = e =>{
    setTasks([])
  }

  return (
    <div className = 'App'>
      <form onSubmit={onNewTaskSubmit}>
        <label for = 'taskEntry'>Enter new task</label>
        <input value = {newTask} name = 'taskEntry' type='text' onChange = {newTaskEntry} onFocus = {()=>setNewTask('')}/>
        <button>Submit</button>
      </form>
      <div className='taskList'>
        {
          tasks.map(a=>{
            return(
              <div><input type='checkbox'/>{a}</div>
            )
          })
        }
      </div>
      <button onClick = {clearTasks}>Clear Tasks</button>
      

    </div>
  );
}

export default App;
