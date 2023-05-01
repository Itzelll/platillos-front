import React from 'react';
import { Table } from 'react-bootstrap';

const Link = (props) => {
  const { link } = props;
  return (
    
    <div className="content-table">  
      <Table striped bordered hover>
        <thead className="thead-dark text-center">
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
            <td className="text-center align-middle">{link.saludable}</td>
            <td>{link.tiempoCoccion}</td>
            <td>{link.dificultadPreparacion}</td>
            <td>{link.utensiliosRequeridos}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Link;