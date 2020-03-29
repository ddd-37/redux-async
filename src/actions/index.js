import jsonPlaceholder from "../apis/jsonPlaceholder";

// This looks odd, but just remeber that these functions are returning functions
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  // Make sure you only return the data you need here
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${userId}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
