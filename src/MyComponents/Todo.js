import React from 'react'

const Todo = ({todo, onDelete}) => {
  return (
    <div>
      <h5 className='my-3'>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <hr />
    </div>   //we are passing a function that has a function call in it
    //here arrow function is called bcoz 'passing' ondelete func would run directly on rendering
  )
}

export default Todo
