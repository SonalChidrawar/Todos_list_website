import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  let myStyle={
    minHeight:"80vh"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">ToDos list</h3>
      {props.ToDos.length===0? "no todos to display": 
      props.ToDos.map((todo) => {
        return (
            <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
      })}
    </div>
  );
};

export default Todos;
