import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';
import logop from "../logop.png";

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
  /*const linksToRender = [
    {
      id: 'link-id-1',
      description:
        'Prisma gives you a powerful database toolkit 😎',
      url: 'https://prisma.io'
    },
    {
      id: 'link-id-2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    },
    {
        id: 'link-id-3',
        description: 'Los mejores platillos que podras encontrar!!!',
        url: 'https://itzelll-itzelll.cloud.okteto.net/graphql/'
    },
    {
        id: 'link-id-4',
        description: 'Aprende a implementar con Graphql React-Apollo',
        url: 'https://www.howtographql.com/react-apollo/2-queries-loading-links/'
    }
  ];*/

  return (
    <div>
      <img src={logop}></img>
      <h2 align="center">Informacion de los Platillos</h2>
      <br></br>
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