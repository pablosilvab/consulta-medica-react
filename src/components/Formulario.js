import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ crearCita }) => {
  // Crear state de citas médicas
  const [cita, actualizarCita] = useState({
    paciente: "",
    prevision: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  // Fn que se ejecuta cuando el usuario escribe en un input -> actualizar state
  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer valores
  const { paciente, prevision, fecha, hora, sintomas } = cita;

  // Enviar formulario
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      paciente.trim() === "" ||
      prevision.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    actualizarError(false);

    // Asignar Id
    cita.id = uuidv4();
    console.log(cita);

    // Crear cita en state principal
    crearCita(cita);

    // Reiniciar Form
    actualizarCita({
      paciente: "",
      prevision: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios.</p>
      ) : null}
      <form onSubmit={submitCita}>
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
