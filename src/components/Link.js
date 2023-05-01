import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        <table class="content-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo platillo</th>
              <th>Calorias</th>
              <th>Proteinas</th>
              <th>Pais de origen</th>
              <th>Ingredientes</th>
              <th>Saludable</th>
              <th>Tiempo coccion</th>
              <th>Dificultad de preparacion</th>
              <th>Utensilios requeridos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{link.nombre}</td>
              <td>{link.tipoPlatillo}</td>
              <td>{link.calorias}</td>
              <td>{link.proteinas}</td>
              <td>{link.paisOrigen}</td>
              <td>{link.ingredientes}</td>
              <td>{link.saludable}</td>
              <td>{link.tiempoCoccion}</td>
              <td>{link.dificultadPreparacion}</td>
              <td>{link.utensiliosRequeridos}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Link;