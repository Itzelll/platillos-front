import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.nombre} ({link.tipoPlatillo}) ({link.calorias}) ({link.proteinas}) ({link.paisOrigen}) ({link.ingredientes}) ({link.saludable}) ({link.tiempoCoccion}) ({link.dificultadPreparacion}) ({link.utensiliosRequeridos})
      </div>
    </div>
  );
};

export default Link;