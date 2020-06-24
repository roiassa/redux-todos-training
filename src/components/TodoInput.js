import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoAction } from "../actions/todosActions";
import uuid from "uuid/v4";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const loggedIn = useSelector((state) => state.loginReducer.loggedIn);
  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch(addTodoAction(todo));

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") {
      return;
    }

    addTodo({
      id: uuid(),
      name: todo,
      complete: false,
    });
    setTodo("");
  };

  return (
    <>
      {loggedIn ? (
        <form onSubmit={onSubmit}>
          <div className="form-div">
            <input
              type="text"
              name="todo"
              placeholder="Add a todo"
              value={todo}
              onChange={onChange}
            />
            <button type="submit">Add todo</button>
          </div>
        </form>
      ) : (
        <h1>Hi</h1>
      )}
    </>
  );
};

export default TodoInput;
