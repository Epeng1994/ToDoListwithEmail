import './App.css';
import { useState } from 'react';

function App() {
  const [tasks,setTasks] = useState([])
  const [newTask,setNewTask] = useState('')

  /*
    User can enter new tasks via form, hold in state
    User can check/complete tasks, remove from list?
    Form to take in input for tasks to be stored within state, div to render out current tasks

  */
  const onNewTaskSubmit = e =>{
    
  }


  return (
    <div>
      <form>
        <input>Enter new task</input>
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
