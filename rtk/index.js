const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");

// initial state
console.log(store.getState());

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// disptach actions
store.dispatch(counterActions.increment());

store.dispatch(counterActions.increment());

store.dispatch(counterActions.decrement());
