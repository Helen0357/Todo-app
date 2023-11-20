import { configureStore  } from "@reduxjs/toolkit";
import TodoSlice from "./Slices/TodoSlice";
export default  configureStore({
    reducer: {
        todos: TodoSlice
    },

})