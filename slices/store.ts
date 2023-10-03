import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./user";
const store = configureStore({
  reducer: { rootReducer },
});
export default store;
