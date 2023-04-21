import React from 'react';
import Link from './Link';

const LinkList = () => {
  const linksToRender = [
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
  ];

  return (
    <div>
      {linksToRender.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;