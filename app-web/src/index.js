import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { fetchTareas } from "./features/tareas/tareasSlice";
import store from "./store";

store.dispatch(fetchTareas());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
