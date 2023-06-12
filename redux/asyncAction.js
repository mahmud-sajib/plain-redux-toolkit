const fetch = require("node-fetch");
const thunk = require("redux-thunk");
const { legacy_createStore, applyMiddleware } = require("redux");

// initial state
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// actions
const fetchPostsRequested = () => {
  return {
    type: "posts/requested",
  };
};

const fetchPostsSucceded = (posts) => {
  return {
    type: "posts/succeded",
    payload: posts,
  };
};

const fetchPostsFailed = (error) => {
  return {
    type: "posts/failed",
    payload: error,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "posts/succeded":
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "posts/failed":
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        posts: [],
      };

    default:
      break;
  }
};

// thunk function
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequested()); // make the loading state true

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5" // fetch data from api
      );
      const posts = await res.json(); // store data

      dispatch(fetchPostsSucceded(posts)); // show the data
    } catch (error) {
      dispatch(fetchPostsFailed(error)); // show error
    }
  };
};

// create store
const store = legacy_createStore(reducer, applyMiddleware(thunk.default));

// subscribe to redux state
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch thunk function
store.dispatch(fetchPosts());
