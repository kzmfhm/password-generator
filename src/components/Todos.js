import React from "react";
import { useSelector } from "react-redux";
const Todos = () => {
  useSelector((state) => state.todos);
  return <div>Todos</div>;
};

export default Todos;
