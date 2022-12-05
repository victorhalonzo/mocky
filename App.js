import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { usePosts } from "./hooks";
import "./App.css";

function App() {
  //const {obtenerPosts} = usePosts();

  const url = "https://run.mocky.io/v3/00efa05c-2efd-4b33-9957-5d5a84285a3e";

  const [todos, setTodos] = useState();

  function obtenerPosts() {
    var posts = null;
    fetch("https://run.mocky.io/v3/00efa05c-2efd-4b33-9957-5d5a84285a3e")
      .catch((error) => console.error("Error:", error))
      .then((data) => data.json())
      .then((data) => {
        setTodos(data);
      });
  }

  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };

  useEffect(() => {
    obtenerPosts();
    //fetchApi();
  }, []);

  return (
    <div className="App">
      {!todos
        ? "Cargando..."
        : todos.map((todo, index) => {
            return (
              <div>
                <img src={todo.image} alt="" id="animado" />
                <h1 key={index}>{todo.title}</h1>
                <p>{todo.subheading}</p>
                <p>{todo.date}</p>
                <button>Read more</button>
              </div>
            );
          })}
    </div>
  );
}

export default App;
