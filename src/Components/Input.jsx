import React, { useState } from "react";

export default function Input(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });

    setInput("");
  };

  return (
    <form className="todo-form">
      <input
        className="todo-input"
        type="text"
        placeholder="Enter Your Todo Here..."
        value={input}
        onChange={handleChange}
      />
      <button type="submit" className="todo-submit-btn" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
