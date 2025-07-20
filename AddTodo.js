import React, { useState } from 'react';

export const AddTodo = (props) => {
  const [sno, setSno] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!sno || !title || !des) {
      alert("All the inputs are required");
      return;
    }

    // ✅ Call the function passed via props
    props.addTodo(parseInt(sno), title, des);

    // ✅ Reset the form fields
    setSno("");
    setTitle("");
    setDes("");
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="sno" className="form-label">S.No.</label>
          <input
            value={sno}
            onChange={(e) => setSno(e.target.value)}
            className="form-control"
            id="sno"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">To-dos Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="des" className="form-label">To-dos Description</label>
          <input
            value={des}
            onChange={(e) => setDes(e.target.value)}
            className="form-control"
            id="des"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add To-dos
        </button>
      </form>
    </div>
  );
};
