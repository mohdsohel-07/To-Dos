import './App.css';
import Header from './MyComponentes/Header';
import { Footer } from './MyComponentes/Footer';
import { AddTodo } from './MyComponentes/AddTodo';
import { Todos } from './MyComponentes/Todos';
import { About } from './MyComponentes/About';
import { SearchBar } from './MyComponentes/SearchBar'; // ✅ Import search bar
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ New state for search

  const addTodo = (sno, title, des) => {
    const newTodo = { sn: sno, name: title, des: des };
    setTodos([...todos, newTodo]);
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ✅ Filter todos based on search term
  const filteredTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    todo.des.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header title="My Todos List" searchBar={false} />
          <AddTodo addTodo={addTodo} />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Todos todos={filteredTodos} onDelete={onDelete} />
          <Footer />
        </Route>

        <Route exact path="/about">
          <Header title="My Todos List" searchBar={false} />
          <About />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
