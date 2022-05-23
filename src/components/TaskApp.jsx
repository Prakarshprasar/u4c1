import React  from "react";
import TaskHeader from "./TaskHeader/TaskHeader";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";

import { useState } from "react";

const TaskApp = () => {
   
  const [arr,setArr]=useState([])
 
  let x=(obj)=>{
    
    // arr.push(obj)
    setArr(previousarray=>{return [...previousarray,obj]})
    // console.log(arr)
  }
  let deleteitem=(id)=>{
    let newarray=arr.filter((elem)=>elem.id !== id);
    setArr(newarray)
  }
  
 
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
       <TaskHeader  />
       <AddTask x={x}/>
      <Tasks arr={arr} deleteitem={deleteitem}/>
    </div>
  );
};

export default TaskApp;
