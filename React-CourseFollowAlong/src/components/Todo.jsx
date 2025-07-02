function Todo({task, desc}) {

    function deleteHandler() { 
        console.log("delete clicked", task)
    }
    
    return (
        <div className="todo-item">
            <h2>{task}</h2>
            <p>{desc}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Todo;