import React, { useState } from 'react'
// import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description not be empty!");
        }else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">ToDO Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} aria-describedby="emailHelp" placeholder="Enter title" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">ToDo Description</label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}

export default AddTodo
