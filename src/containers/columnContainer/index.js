import React, { useState } from 'react'
import Column from "./../../components/Column";

// CSS
import "./columnContainer.css"

const ColumnContainer = (props) => {
  const [toDoArr, setToDoArr] = useState([])
  const [inProgressArr, setInProgressArr] = useState([])
  const [qaArr, setQaArr] = useState([])
  const [doneArr, setDoneArr] = useState([])

  const setArr = (arr, column) => {
    switch (column) {
      case "To Do":
      setToDoArr(arr);
      break;
      case "In Progress":
      setInProgressArr(arr);
      break;
      case "QA":
      setQaArr(arr);
      break;
      case "Done":
      setDoneArr(arr);
      break;
    }
  }

  return (
    <div className="column-container">
      <Column
        title={"To Do"}
        arr={toDoArr}
        setFunction={setArr}
      />
      <Column
        title={"In Progress"}
        arr={inProgressArr}
        setFunction={setArr}
      />
      <Column
        title={"QA"}
        arr={qaArr}
        setFunction={setArr}
      />
      <Column
        title={"Done"}
        arr={doneArr}
        setFunction={setArr}
      />
    </div>
  )
}

export default ColumnContainer;
