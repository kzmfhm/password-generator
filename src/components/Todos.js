import React from "react";
import { useSelector } from "react-redux";
const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  return <div className="text-black">Todos</div>;
};

export default Todos;
