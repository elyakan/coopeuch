import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { tareaAdded } from "./tareasSlice";

export function AddTarea() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [descripcion, setDescripcion] = useState("");
  const [fechaCreacion, setFechaCreacion] = useState("");
  const [vigente, setVigente] = useState("");
  const [error, setError] = useState(null);

  const handleDescripcion = (e) => setDescripcion(e.target.value);
  const handleFechaCreacion = (e) => setFechaCreacion(e.target.value);
  const handleVigente = (e) => setVigente(e.target.value);

  const tareasAmount = useSelector((state) => state.tareas.entities.length);

  const handleClick = () => {
    if (descripcion && fechaCreacion && vigente) {
      dispatch(
        tareaAdded({
          idIdentificador:tareasAmount,
          descripcion,
          fechaCreacion,
          vigente,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setDescripcion("");
    setFechaCreacion("");
    setVigente("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add Tarea</h1>
      </div>
      <div className="row">
        <div className="Four columns">
          <label htmlFor="descripcionInput">Descripcion</label>
          <input
            className="u-full-width"
            type="text"
            id="descripcionInput"
            onChange={handleDescripcion}
            value={descripcion}
          />
          <label htmlFor="fechaCreacionInput">Fecha Creacion</label>
          <input
            className="u-full-width"
            type="text"
            id="fechaCreacionInput"
            onChange={handleFechaCreacion}
            value={fechaCreacion}
          />
          <label htmlFor="vigenteInput">Vigente</label>
                    <input
                      className="u-full-width"
                      type="text"
                      id="vigenteInput"
                      onChange={handleVigente}
                      value={vigente}
                    />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Add Tarea
          </button>
        </div>
      </div>
    </div>
  );
}
