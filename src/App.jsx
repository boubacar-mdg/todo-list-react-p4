import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    let data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });
  const [showForm, setShowForm] = useState(false);
  const [input, setInput] = useState("");

  function toggleAdd() {
    /*  if(showForm === false){
      setShowForm(true);
    } else {
      setShowForm(false);
    }

    setShowForm(showForm == false ? true : false );

     */

    setShowForm((form) => !form);

    //setShowForm(!showForm);
  }

  function randomId() {
    return Date.now();
  }

  function handleAdd(e) {
    e.preventDefault();
    console.log("Formulaire soumis");
    console.log(`Input : ${input}`);
    if (input == "") {
      alert("Merci de remplir les champs vides");
    } else {
      let newTodo = { name: input, id: randomId(), complete: false };
      // Spread operator
      setTodos((todos) => {
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
        return [...todos, newTodo];
      });
      setInput("");
    }
  }

  function handleDeleteTodo(id) {
    setTodos((todos) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(todos.filter((todo) => todo.id !== id))
      );
      return todos.filter((todo) => todo.id !== id);
    });
  }

  function handleCompleteTodo(id) {
    setTodos((todos) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(
          todos.map(todo => (todo.id === id) ? { ...todo, complete: !todo.complete } : todo)
        )
      );
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    });
  }

  return (
    <>
      <div id="page">
        <div id="box">
          <div id="title">Samedi</div>
          <div id="subtitle">25 mai</div>
          <TodoList
            allTodos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          ></TodoList>
          {/*           <div id="toggleAdd" onClick={()=> setShowForm((form)=>!form)}>+</div>
           */}
          <div id="toggleAdd" onClick={toggleAdd}>
            {showForm ? "Cacher" : "Afficher"} le formulaire
          </div>
          {showForm && (
            <form id="add-box" onSubmit={handleAdd}>
              <input
                className="input"
                type="text"
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="button" type="submit">
                Ajouter
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
