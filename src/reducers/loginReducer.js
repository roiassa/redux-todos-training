const initialState = {
  loggedIn: false,
};

const loginReducer = (state = initialState, { type }) => {
  switch (type) {
    case "LOG_IN":
      return {
        loggedIn: true,
      };
    case "LOG_OUT":
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
