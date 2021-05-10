import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddTarea } from "./features/tareas/AddTarea";
import { EditTarea } from "./features/tareas/EditTarea";
import React from "react";
import { TareaList } from "./features/tareas/TareaList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-tarea">
            <AddTarea />
          </Route>
          <Route path="/edit-tarea">
            <EditTarea />
          </Route>
          <Route path="/">
            <TareaList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
