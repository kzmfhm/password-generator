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
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input type="text" className="bg-gray-500 "></input>
    </form>
  );
};

export default AddTodo;
