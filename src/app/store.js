import { createStore, combineReducers } from "redux";
import todosReducer from "../reducers/todosReducer";
import loginReducer from "../reducers/loginReducer";

export default createStore(
  combineReducers({
    todosReducer,
    loginReducer,
  }),
  window.devToolsExtension && window.devToolsExtension()
);
