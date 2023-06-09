import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';
import logop from "../logop.png";
import { useTranslation } from 'react-i18next';

const FEED_QUERY = gql`
  query {
    comidas {
      nombre
      tipoPlatillo
      calorias
      proteinas
      paisOrigen
      ingredientes
      saludable
      tiempoCoccion
      dificultadPreparacion
      utensiliosRequeridos
    }
  }
`
;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);
  const { t } = useTranslation();

  return (
    <div>
      <div>
      <img src={logop} alt='logo' className='img-logo'></img> 
      <h2 align="center"> {t("info")} </h2>
      <br></br>
      </div>
      {data && (
        <>
          {data.comidas.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;