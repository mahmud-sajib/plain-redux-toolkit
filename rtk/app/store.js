const { configureStore } = require("@reduxjs/toolkit");

// importing slices
const counterReducer = require("../features/counter/counterSlice");
const keeperReducer = require("../features/keeper/keeperSlice");

// importing logger from redux-logger middleware
const { default: logger } = require("redux-logger");

// configuring store (providing the reducer to redux store)
const store = configureStore({
  reducer: {
    counter: counterReducer, // Assigning the counterReducer to the "counter" slice of the store
    keeper: keeperReducer, // Assigning the keeperReducer to the "keeper" slice of the store
  },
  // getDefaultMiddlewares() is redux's own middleware.
  // We need to return it first & concat our own middleware to use it
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
