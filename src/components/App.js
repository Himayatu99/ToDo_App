import React, { useState } from "react";

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
            {Items.map((itemval) => {
              return <li>{itemval}</li>
            })}


          </ol>
        </div>
      </div>
    </>
  )
}
export default App 