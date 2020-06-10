import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from './components/Cita'

function App() {
  // Citas
  const [citas, guardarCitas] = useState([]);

  // Función que tome citas actuales y agreue la nueva
  const crearCita = (cita) => {
    // usamos la funcion que modifica el state
    guardarCitas([...citas, cita]);
  };

  

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>

          <div className="one-half column">
            <h2>Administrar citas</h2>
            {citas.map(cita =>(
              <Cita
                key={cita.id}
                cita={cita}
              />  
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
