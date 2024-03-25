import React from "react";
import { useGlobalContext } from "../helpers/context";

const TaskList = () => {
  const { isLoading, tasks, markComplete } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>;
  }

  return (
    <>
      <ul className='list-container'>
        {tasks.map((task) => {
          const { id, taskName } = task;

          return (
            <li key={id} className='checked'>
              {taskName}
              {/* <img
                src='https://img.icons8.com/ios-filled/50/available-updates.png'
                alt=''
              />
              <img src='https://img.icons8.com/ios-filled/50/recycle-bin.png' /> */}
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
};

export default TaskList;
