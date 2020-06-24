import uuid from "uuid/v4";

const initialState = {
  todos: [
    {
      id: uuid(),
      name: "Go to the gym",
      complete: false,
    },
    {
      id: uuid(),
      name: "Do laundry",
      complete: true,
    },
  ],
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        //getting the current state with spread operator
        ...state,
        //getting the current todos in state with spread operator and adding the new todo which will be in action.payload
        todos: [...state.todos, payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        //if the todo id in the payload matches the todo id in the state toggle that complete value for this todo, else we return the todo
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        //if the todo id in the payload matches the todo id in the state it will remove this todo
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    //default case: just return the state
    default:
      return state;
  }
};

export default todosReducer;
