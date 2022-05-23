import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({arr,deleteitem}) => {
  const [isChecked,setIsChecked]=useState(false)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    {arr&&arr.map((elem)=>(
      <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={isChecked} onChange={(e)=>{setIsChecked(e.target.checked)}} />
      <div data-cy="task-text" className={isChecked?styles.striked:""}>{elem.value}</div>
      
      <Counter/>
     
      <button data-cy="task-remove-button" onClick={()=>{deleteitem(elem.id)}}>x</button>
      </li>
    ))}
    </>
  );
};

export default Task;
