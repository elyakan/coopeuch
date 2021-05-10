import { configureStore } from "@reduxjs/toolkit";
import tareasReducer from "./features/tareas/tareasSlice";

export default configureStore({
  reducer: {
    tareas: tareasReducer,
  },
});
