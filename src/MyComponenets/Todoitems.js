export const Todoitems = ({ todo, onDelete }) => {
  return (
    <div className="text-start ms-3 py-3">
      <h3>{todo.sn}</h3>
      <h5>{todo.name}</h5>
      <p>{todo.des}</p>
      <button className="btn btn-danger" onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  )
}
