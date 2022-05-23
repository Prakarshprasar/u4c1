import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({arr,deleteitem}) => {
  // console.log(arr,"gh")
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <Task arr={arr} deleteitem={deleteitem}/>
        
      </ul>
      <div data-cy="tasks-empty" className={arr&&arr.length>0?styles.empty:styles.w}>
        {/* Show when No Tasks are present */}
        Todo Is Empty
      </div>
    </>
  );
};

export default Tasks;
