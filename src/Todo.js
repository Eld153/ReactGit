// Task Todo 
function Todo({ todo, clickStrikeout, deleteTask }) {
    return (
        <div key={todo.id} className='item-todo'>
            <div className={todo.complete ? 'item-text strike' : 'item-text'}
                onClick={() => clickStrikeout(todo.id)}
            >
                {todo.task}
            </div>
            <div className='item-delete' onClick={() => deleteTask(todo.id)}>
                X
            </div>
        </div>
    )
}

export default Todo