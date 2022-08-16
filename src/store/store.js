import { configureStore } from "@reduxjs/toolkit";

//reducer
import userReducer from "../reducer/get";
const store = configureStore({
  reducer: {
    lista: userReducer,
  },
});
export default store;
