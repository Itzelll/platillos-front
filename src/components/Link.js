import React from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Link = (props) => {
  const { link } = props;
  const { t } = useTranslation();

  return (
    
    <div className="content-table">  
      <Table striped bordered hover>
        <thead className="thead-dark text-center">
          <tr>
            <th>{t("nombre")}</th>
            <th>{t("tipo")}</th>
            <th>{t("calorias")}</th>
            <th>{t("proteinas")}</th>
            <th>{t("pais")}</th>
            <th>{t("ingredientes")}</th>
            <th>{t("saludable")}</th>
            <th>{t("time")}</th>
            <th>{t("dificultad")}</th>
            <th>{t("utensilios")}</th>
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