import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
import { tareaUpdated } from "./tareasSlice";

export function EditTarea() {
  const { pathname } = useLocation();
  const idIdentificador = parseInt(pathname.replace("/edit-tarea/", ""));

console.log(pathname);

  const tarea = useSelector((state) => state.tareas.entities.find((tarea) => tarea.idIdentificador === idIdentificador));

  const dispatch = useDispatch();
  const history = useHistory();

  const [descripcion, setDescripcion] = useState(tarea.descripcion);
  const [fechaCreacion, setFechaCreacion] = useState(tarea.fechaCreacion);
  const [vigente, setVigente] = useState(tarea.vigente);
  const [error, setError] = useState(null);

  const handleDescripcion = (e) => setDescripcion(e.target.value);
  const handleFechaCreacion = (e) => setFechaCreacion(e.target.value);
  const handleVigente = (e) => setVigente(e.target.value);


  const handleClick = () => {
    if (descripcion && fechaCreacion && vigente) {
      dispatch(
        tareaUpdated({
          idIdentificador: idIdentificador,
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
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit Tarea</h1>
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
            Save Tarea
          </button>
        </div>
      </div>
    </div>
  );
}
