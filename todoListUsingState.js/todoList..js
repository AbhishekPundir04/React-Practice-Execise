import { useState } from "react";
import classes from "./todosList.module.css";
import TodoList from "./todolistComponent";
const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const inputHandler = (event) => {
    setNewTask(event.target.value);
  };

 
  const addTask = () => {
    const task ={
      id: todoList.length===0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: true
    }
    setTodoList([ ...todoList,task]);
  };
  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => task.id !== taskName);
    setTodoList(newTodoList);
  };

  const completeTask = (id) =>{
    setTodoList(
      todoList.map((task)=>{
        if(task.id ===id){
          return {...task, completed: true};
        }else{
          return task;
        }
      })
    )
  }

  return (
    <div>
      <div>
        <input onChange={inputHandler} className={classes.inputvalue} />
        <button onClick={addTask} className={classes.btn}>
          Add todos
        </button>
      </div>
      <div>
        {todoList.map((task) => {
          return <TodoList taskName={task.taskName} id={task.id} deleteTask={deleteTask} completeTask={completeTask}/>
        
        })}
      </div>
    </div>  
  );
};

export default Todo;
