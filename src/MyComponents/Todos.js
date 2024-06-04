import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='my-3'>My ToDos List</h3>
      {props.todos.length === 0 ? <h4>No record found !</h4> :
        props.todos.map((todo) => {
          return (
            <div key={todo.sno}>
              <TodoItem todo={todo} onDelete={props.onDelete} />
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default Todos
