import React, { useState } from "react"

// CSS
import "./newTask.css";

const NewTask = (props) => {
  const {
    onClickHandler,
    addTaskHandler
  } = props;

  const [value, setValue] = useState("")
  const [error, setError] = useState("")

  const setInputValue = (e) => {
    const value = e.target.value
    setValue(value)
  };

  const addButtonHandler = () => {
    if (value.length === 0) {
      setError("Field cannot be blank")
    } else {
      addTaskHandler(value)
      onClickHandler()
    }
  }

  return (
    <div className="new-task">
    <input
      type="text"
      id="name"
      name="name"
      required
      placeholder="Enter a title for this card"
      onChange={setInputValue}
    />
    <span style={{ color: "red" }}>{error}</span>
    <div className="add-close-btn-ctn">
        <button className="add-btn" onClick={() => addButtonHandler()}>Add card</button>
        <button onClick={() => onClickHandler()}>X</button>
    </div>
    </div>
  )
}

export default NewTask;
