const error = (store) => (next) => (action) => {
  if (action.type === "Error")
    console.log("Toastify: ", action.payload.message);
  else return next(action);
};

export default error;
