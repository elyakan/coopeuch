import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTareas = createAsyncThunk("tareas/fetchTareas", async () => {
  const settings = {
            headers: {
                "Authorization": "1",
                  "Content-Type": "application/json;charset=UTF-8",
                  "Accept": "*/*",
                  "Access-Control-Allow-Credentials": "true",
                  "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                  "Access-Control-Allow-Headers": "Content-Type, Accept, X-Requested-With, remember-me"
            }
            }
  const response = await fetch("http://127.0.0.1:8083/api/v1/tarea",settings);
  const tareas = await response.json();

  return tareas;
});

const tareasSlice = createSlice({
  name: "tareas",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    tareaAdded(state, action) {
      state.entities.push(action.payload);
    },
    tareaUpdated(state, action) {
      const { idIdentificador, descripcion, fechaCreacion,vigente } = action.payload;
      const existingTarea = state.entities.find((tarea) => tarea.idIdentificador === idIdentificador);
      if (existingTarea) {
        existingTarea.descripcion = descripcion;
        existingTarea.fechaCreacion = fechaCreacion;
        existingTarea.vigente = vigente;
      }
    },
    tareaDeleted(state, action) {
      const { idIdentificador } = action.payload;
      const existingTarea = state.entities.find((tarea) => tarea.idIdentificador === idIdentificador);
      if (existingTarea) {
        state.entities = state.entities.filter((tarea) => tarea.idIdentificador !== idIdentificador);
      }
    },
  },
  extraReducers: {
    [fetchTareas.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTareas.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchTareas.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { tareaAdded, tareaUpdated, tareaDeleted } = tareasSlice.actions;

export default tareasSlice.reducer;
