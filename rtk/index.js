const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const { keeperActions } = require("./features/keeper/keeperSlice");

// initial state
// console.log(store.getState());

// subscribe to state changes
store.subscribe(() => {
  //   console.log(store.getState());
});

// disptach counter actions
store.dispatch(counterActions.increment());

store.dispatch(counterActions.increment());

store.dispatch(counterActions.decrement());

// disptach keeper actions
store.dispatch(keeperActions.increment(10));

store.dispatch(keeperActions.decrement(5));
