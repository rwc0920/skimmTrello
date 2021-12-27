import React from "react"

// CSS
import "./task.css"

const Task = (props) => {
  const { value } = props

  const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  }

  return (
    <div className="task">
      <button
        draggable="true"
        onDragStart={(e) => drag(e)}
      >{value}
      </button>
    </div>
  )
}

export default Task
