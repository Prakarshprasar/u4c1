import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({x}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setValue]=useState("")
  // console.log(value)
  let pusharr=()=>{
    
    x({id:Date.now,value:value}) 
    
    setValue("")
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add Task..." value={value} onChange={(e)=>{setValue(e.target.value)}} />
      <button data-cy="add-task-button" onClick={pusharr} disabled={!value}>+</button>
    </div>
  );
};

export default AddTask;
