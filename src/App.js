import "./App.css";
import Header from "./MyComponents/Header";
import AddTodo from "./MyComponents/AddTodo";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useEffect, useState } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    //  deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    ); //filter is an higher order array method

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  // let initTodo;
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="MyTodosList" searchBar={true} />
      <AddTodo addTodo={addTodo} />;
      <Todos ToDos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
