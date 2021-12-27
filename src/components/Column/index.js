import React, { useState, useEffect } from "react"

// Components
import Task from "../Task";
import NewTask from "../NewTask";

// CSS
import "./column.css"

const Column = (props) => {
  const { title, arr, setFunction } = props;
  const [task, setTask] = useState(false)

  useEffect(() => {
    renderTasks()
  }, [arr])

  const handleClick = () => {
    setTask(true)
  }
  const handleClose =() => {
    setTask(false)
  }

  const addTask = (value) => {
    switch (title) {
      case "To Do":
        arr.push(value)
        return setFunction(arr, title)
      case "In Progress":
        arr.push(value)
        return setFunction(arr, title)
      case "QA":
        arr.push(value)
        return setFunction(arr, title)
      case "Done":
        arr.push(value)
        return setFunction(arr, title)
    }
  }

  const renderTasks = () => {
    return arr.map((task, i) => {
      return (
        <Task
          key={i}
          value={task}
        />
      )
    })
  }

  const allowDrop = (e) => {
  e.preventDefault();
  }

  const drop = (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log(e)
  var data = e.dataTransfer.getData("text");
  console.log("data", data)
  e.target.append(document.getElementById(data));
  }

  return (
    <div
      className="column"
      onDragOver={(e) => allowDrop(e)}
      onDrop={(e) => drop(e)}
    >
      <p>{title}</p>
        {task &&
          <NewTask
          onClickHandler={() => handleClose()}
          addTaskHandler={addTask}
          />
        }
      {renderTasks()}
      <div className="add-task-button">
        <button onClick={() => handleClick()}>
          + Add another card
        </button>
      </div>
    </div>
  )
}

export default Column;
