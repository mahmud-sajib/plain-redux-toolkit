const { combineReducers, legacy_createStore } = require("redux");
const counterReducer = require("./counter/reducer");

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = legacy_createStore(rootReducer);

module.exports = store;
