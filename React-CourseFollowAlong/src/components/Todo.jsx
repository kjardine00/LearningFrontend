function Todo({ task, desc, togglePopup }) {
  return (
    <div className="todo-item">
      <h2>{task}</h2>
      <p>{desc}</p>
      <button onClick={togglePopup}>Delete</button>
    </div>
  );
}

export default Todo;
