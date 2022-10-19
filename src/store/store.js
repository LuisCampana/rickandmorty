import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducer/get";
const store = configureStore({
  reducer: {
    lista: userReducer,
  },
});
export default store;
