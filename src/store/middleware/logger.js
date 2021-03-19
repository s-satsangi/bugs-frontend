// while we want something like this,
// const logger = (store, next, action) => {};
// we need functions with single arguments,
// so we curry the function:
const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging: ", param);
  return next(action);
};

export default logger;

//Now set this up in configureStore!
