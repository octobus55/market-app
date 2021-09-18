import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../reducer/index";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
