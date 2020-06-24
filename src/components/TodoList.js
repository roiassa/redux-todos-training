import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { toggleTodoAction, deleteTodoAction } from "../actions/todosActions";

const TodoList = ({ todos, loggedIn, toggleTodo, deleteTodo }) => {
  //our todos are stored here and whenever they change they change here as well
  // const todos = useSelector((state) => state.todosReducer.todos);
  // const loggedIn = useSelector((state) => state.loginReducer.loggedIn);
  // const dispatch = useDispatch();
  // const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
  // const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));
  return (
    <>
      {loggedIn ? (
        <ul className="todo-list">
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className={todo.complete ? "complete" : null}>
                  {todo.name}
                </span>
                <span
                  className="delete-button"
                  onClick={() => deleteTodo(todo.id)}
                >
                  X
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>Hello</h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todosReducer.todos,
    loggedIn: state.loginReducer.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (todoId) => dispatch(toggleTodoAction(todoId)),
    deleteTodo: (todoId) => dispatch(deleteTodoAction(todoId)),
  };
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
