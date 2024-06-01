import React from "react";

function Todo({ id, name, handleDeleteTodo, complete, handleCompleteTodo }) {
  function deleteTodo() {
    handleDeleteTodo(id);
  }

  function completeTodo() {
    handleCompleteTodo(id);
  }

  return (
    <li>
      <div id="box-todo">
        <div id="todo-title" className={complete ? "line-through" : ""}>
          {name}
        </div>
        <div id="actions">
          <div id="completed-box" onClick={completeTodo}>
            {complete && <div className="blue-dot"></div>}
          </div>
          {complete && (
            <button className="delete-button" onClick={deleteTodo}>
              Supprimer
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default Todo;
