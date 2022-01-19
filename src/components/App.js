import React, { useState } from "react";
import ToDoItems from "./Items";
const App = () => {
  const [inputList, setInputList] = useState("")
  const [Items, setItems] = useState([])

  const handleItem = (e) => {
    const data = e.target.value;
    setInputList(data)
  }
  const ListOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList('');
  }
  const deleted = (id) => {
    console.log("deleted...")

    setItems((oldItems) => {
      return oldItems.filter((arrElem, inde) => {
        return inde !== id;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text' value={inputList} placeholder="Add a Items" onChange={handleItem} />
          <button onClick={ListOfItem}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map((itemval, inde) => {
              return <ToDoItems key={inde} id={inde} text={itemval} onSelect={deleted} />
            })}


          </ol>
        </div>
      </div>
    </>
  )
}
export default App 