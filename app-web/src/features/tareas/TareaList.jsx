import { fetchTareas, tareaDeleted } from "./tareasSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function TareaList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.tareas);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (idIdentificador) => {
    dispatch(tareaDeleted({ idIdentificador }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD Tarea app</h1>
      </div>
      <div className="row">
        <div className="two columns">
        </div>
        <div className="two columns">
          <Link to="/add-tarea">
            <button className="button-primary">Add Tarea</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Descripcion</th>
                <th>Fecha Creacion</th>
                <th>Vigente</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ idIdentificador, descripcion, fechaCreacion, vigente }, i) => (
                  <tr key={i}>
                    <td>{idIdentificador}</td>
                    <td>{descripcion}</td>
                    <td>{fechaCreacion}</td>
                    <td>{vigente}</td>
                    <td>
                      <button onClick={() => handleDelete(idIdentificador)}>Delete</button>
                      <Link to={`/edit-tarea/${idIdentificador}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
