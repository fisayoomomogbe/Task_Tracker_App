import {useState} from "react"
import Header from './components/Header'
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
function App() {
  const [tasks,setTasks] = useState( [
    { id: 1,
    text: "Doctor's appointment",
    day:"May 5th , 2021",
    reminder:true},
    { id: 2,
     text: "Reading",
     day:"May 7th , 2021",
    reminder:true},
    { id: 3,
        text: "Shopping",
        day:"May 19th , 2021",
        reminder: false}
    ]
)

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id,...task}
  setTasks([...tasks, newTask]);
}

// Delete Task
 const deleteTask = (id) => {
   setTasks(tasks.filter((task)=> (task.id !==id)))
 }
//  Toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder}: task)))
}


  return (
    <div className = "container">
<Header />
<AddTask onAdd = {addTask}/>
{tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>: " No Tasks to show"}

    </div>
   
  );
}

export default App;
