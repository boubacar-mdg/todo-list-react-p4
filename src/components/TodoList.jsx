import React from "react";
import Todo from "./Todo";

function TodoList({ allTodos, handleDeleteTodo, handleCompleteTodo }) {
  return (
    <>
      {allTodos.length === 0 ? (
        "Aucune tâche disponible"
      ) : (
        <ul id="todoList">
          {allTodos.map((todo) => (
            <Todo
              key={todo.id}
              name={todo.name}
              id={todo.id}
              complete={todo.complete}
              handleDeleteTodo={handleDeleteTodo}
              handleCompleteTodo={handleCompleteTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
