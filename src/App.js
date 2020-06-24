import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <TodoInput />
        <TodoList />
        <Login />
      </div>
    </Provider>
  );
}

export default App;
