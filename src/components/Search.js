import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import Link from './Link';


const SEARCH_QUERY = gql`
    query comidas($search: String!) {
        comidas(search: $search) {
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


const Search = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data }] = useLazyQuery(SEARCH_QUERY);

  return (
    <>
      <div>
        Search
        <input
          type="text"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button
          onClick={() =>
            executeSearch({
              variables: { search: searchFilter }
            })
          }>
          OK
        </button>
      </div>
      {data &&
        data.comidas.map((link, index) => (
          <Link key={link.id} link={link} index={index} />
        ))}
    </>
  );
};

export default Search;