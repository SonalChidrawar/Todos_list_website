import React, { useState } from "react";

const AdTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault(); //page will not reload
    if (!title || !desc) {
      alert("title or description cannot be blank");
    }
    else{
    props.addTodo(title, desc);
    setTitle("");
    setDesc("")
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="form-group my-3">
          <label htmlFor="title">Todo title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            placeholder="Enter todo"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
            placeholder="Enter description"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AdTodo;
