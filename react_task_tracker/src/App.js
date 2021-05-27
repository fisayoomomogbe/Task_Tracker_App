import {useState} from "react"
import Header from './components/Header'
import Tasks from "./components/Tasks"
function App() {
  const [tasks,setTasks] = useState( [
    { id: 1,
    txt: "Doctor's appointment",
    day:"May 5th , 2021",
    reminder:true},
    { id: 2,
     txt: "Reading",
     day:"May 7th , 2021",
    reminder:true},
    { id: 3,
        txt: "Shopping",
        day:"May 19th , 2021",
        reminder: false}
    ]
)

// Delete Task
 const deleteTask = (id) => {
   setTasks(tasks.filter((task)=> (task.id !==id)))
 }

  return (
    <div className = "container">
<Header />
{tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask}/>: " No Tasks to show"}
    </div>
   
  );
}

export default App;
