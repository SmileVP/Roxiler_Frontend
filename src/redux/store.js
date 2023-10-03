import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";

//store holds the whole state tree of your application
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
