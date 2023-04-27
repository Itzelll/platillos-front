import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation createComida(
    $nombre: String!
    $tipoPlatillo: String!
    $paisOrigen: String!
    $proteinas: Float!
    $calorias: Float!
    $dificultadPreparacion: Int!
    $ingredientes: String!
    $saludable: String!
    $tiempoCoccion: Int!
    $utensiliosRequeridos: String!
  ) {
    createComida(nombre: $nombre, tipoPlatillo: $tipoPlatillo, paisOrigen: $paisOrigen, proteinas: $proteinas, calorias: $calorias, dificultadPreparacion: $dificultadPreparacion, ingredientes: $ingredientes, saludable: $saludable, tiempoCoccion: $tiempoCoccion, utensiliosRequeridos: $utensiliosRequeridos) {
      id
      nombre
      tipoPlatillo
      paisOrigen
      proteinas
      calorias
      dificultadPreparacion
      ingredientes
      saludable
      tiempoCoccion
      utensiliosRequeridos
    }
  }
`;


const CreateLink = () => {

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    nombre: '',
    tipoPlatillo: '',
    paisOrigen: '',
    proteinas: 0,
    calorias: 0,
    dificultadPreparacion: 0,
    ingredientes: '',
    saludable: '',
    tiempoCoccion: 0,
    utensiliosRequeridos: ''
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      nombre: formState.nombre,
      tipoPlatillo: formState.tipoPlatillo,
      paisOrigen: formState.paisOrigen,
      proteinas: formState.proteinas,
      calorias: formState.calorias,
      dificultadPreparacion: formState.dificultadPreparacion,
      ingredientes: formState.ingredientes,
      saludable: formState.saludable,
      tiempoCoccion: formState.tiempoCoccion,
      utensiliosRequeridos: formState.utensiliosRequeridos
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="Nombre del platillo"
          />
          <input
            className="mb2"
            value={formState.tipoPlatillo}
            onChange={(e) =>
              setFormState({
                ...formState,
                tipoPlatillo: e.target.value
              })
            }
            type="text"
            placeholder="Tipo de platillo (example: entrada, postre...)"
          />
          <input
            className="mb2"
            value={formState.paisOrigen}
            onChange={(e) =>
              setFormState({
                ...formState,
                paisOrigen: e.target.value
              })
            }
            type="text"
            placeholder="Pais de origen de la comida"
          />
          <input
            className="mb2"
            value={formState.proteinas}
            onChange={(e) =>
              setFormState({
                ...formState,
                proteinas: e.target.value
              })
            }
            type="number"
            placeholder="Valor de proteinas"
          />
          <input
            className="mb2"
            value={formState.calorias}
            onChange={(e) =>
              setFormState({
                ...formState,
                calorias: e.target.value
              })
            }
            type="number"
            placeholder="Valor de calorias"
          />
          <input
            className="mb2"
            value={formState.dificultadPreparacion}
            onChange={(e) =>
              setFormState({
                ...formState,
                dificultadPreparacion: e.target.value
              })
            }
            type="number"
            placeholder="Dificultad de preparacion del 1 al 5"
          />
          <input
            className="mb2"
            value={formState.ingredientes}
            onChange={(e) =>
              setFormState({
                ...formState,
                ingredientes: e.target.value
              })
            }
            type="text"
            placeholder="Ingredientes que se utilizan"
          />
          <input
            className="mb2"
            value={formState.saludable}
            onChange={(e) =>
              setFormState({
                ...formState,
                saludable: e.target.value
              })
            }
            type="text"
            placeholder="¿Es saludable? Si/No"
          />
          <input
            className="mb2"
            value={formState.tiempoCoccion}
            onChange={(e) =>
              setFormState({
                ...formState,
                tiempoCoccion: e.target.value
              })
            }
            type="text"
            placeholder="Minutos de coccion..."
          />
          <input
            className="mb2"
            value={formState.utensiliosRequeridos}
            onChange={(e) =>
              setFormState({
                ...formState,
                utensiliosRequeridos: e.target.value
              })
            }
            type="text"
            placeholder="Utensilios utilizados..."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;