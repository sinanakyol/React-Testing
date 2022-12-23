import React, { useState } from "react";

const defaultItems = [
  { name: "Item 1" },
  { name: "Item 2" },
  { name: "Item 3" },
];

function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    // setItems([...items, { name: text }])
    setText("");
  };

  return (
    <div>
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={addItem}>Add</button>

      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;
