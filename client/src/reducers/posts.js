export default reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;

    default:
      return posts;
  }
};
