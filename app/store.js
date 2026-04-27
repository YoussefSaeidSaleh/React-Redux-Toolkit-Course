import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/iceCream/icecreamSlice";
// const { logger } = require("redux-logger");
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddle) => getDefaultMiddle().concat(logger),
});

export default store;
