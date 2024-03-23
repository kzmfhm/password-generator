import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(AddTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-[12rem]">
      <input
        type="text"
        className="bg-gray-500 rounded-border border-gray-700 py-1 px-3"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        type="submit"
        className="text-white bg-indigo-500 py-2 px-6 text-lg rounded"
      >
        Add To do
      </button>
    </form>
  );
};

export default AddTodo;
