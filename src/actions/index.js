import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log("about to fethc posts");
  await dispatch(fetchPosts());

  let userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => {
    dispatch(fetchUser(id));
  });
};

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

// Ref to memoize
// export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${userId}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
