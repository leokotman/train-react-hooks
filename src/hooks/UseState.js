import React, { useState } from "react";

const UseState = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Change value in input
  const changeInputValue = (event) => {
    let newValue = event.target.value;
    setInputValue(newValue);
  };

  // Add item to the List
  const addItem = () => {
    const newItem = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
    };
    setItems([...items, newItem]);
    setInputValue("");
  };

  return (
    <section className="state">
      <h3>UseState</h3>
      <input
        placeholder="Write a new item in the list"
        onChange={changeInputValue}
        value={inputValue}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            addItem();
          }
        }}
      />
      <button onClick={addItem}>Add item</button>
      <div>
        {items.map((item) => (
          <p key={item.id}>
            {item.id} {item.text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default UseState;
