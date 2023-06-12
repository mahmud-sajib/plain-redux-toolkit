const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const { keeperActions } = require("./features/keeper/keeperSlice");
const { fetchPosts } = require("./features/post/postSlice");

// subscribe to state changes
store.subscribe(() => {
  // console.log(store.getState());
});

// disptach counter actions
store.dispatch(fetchPosts());
