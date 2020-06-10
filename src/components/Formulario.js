import React, { Fragment } from "react";

const Formulario = () => {
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
        />
        <label>Previsión</label>
        <input
          type="text"
          name="prevision"
          className="u-full-width"
          placeholder="Previsión"
        />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" />

        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" />

        <label>Síntomas</label>
        <textarea className="u-full-width" name="sintomas"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
