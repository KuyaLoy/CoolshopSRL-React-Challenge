import React, { useRef, useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState();
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
  };

  return (
    <form>
      <>
        <input
          placeholder="Add your task here..."
          value={input}
          onChange={handleChange}
          name="text"
          ref={inputRef}
        />
        <button onClick={handleSubmit}>add</button>
      </>
    </form>
  );
}
