const configureStore = require("@reduxjs/toolkit").configureStore;

const counterReducer = require("../features/counter/counterSlice");

// configuring store (providing the reducer to redux store)
const store = configureStore({
  reducer: {
    counter: counterReducer, // Assigning the counterReducer to the "counter" slice of the store
  },
});

module.exports = store;
