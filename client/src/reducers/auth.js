const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case "IMAGEID":
      return { authData: action.data };
    default:
      return state;
  }
};

export default authReducer;
