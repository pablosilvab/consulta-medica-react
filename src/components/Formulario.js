import React, { Fragment, useState } from "react";

const Formulario = () => {
  // Crear state de citas médicas
  const [cita, actualizarCita] = useState({
    paciente: "",
    prevision: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // Fn que se ejecuta cuando el usuario escribe en un input -> actualizar state
  const handleChange = e => {
    actualizarCita({
      ...cita, 
      [e.target.name]: e.target.value
    })
  };

  // Extraer valores
  const { paciente, prevision, fecha, hora, sintomas} = cita;

  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form>
        <label>Nombre Paciente</label>
        <input
          type="text"
          name="paciente"
          className="u-full-width"
          placeholder="Nombre paciente"
          onChange={handleChange}
          value={paciente}
        />

        <label>Previsión</label>
        <input
          type="text"
          name="prevision"
          className="u-full-width"
          placeholder="Previsión"
          onChange={handleChange}
          value={prevision}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
