import React from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_DATA_ENTRY = gql`
  mutation CreateDataEntry(
    $user: String!,
    $model: String!,
    $prompt: String!,
    $result: String!
  ) {
    createDataEntry(
      user: $user,
      model: $model,
      prompt: $prompt,
      result: $result
    ) {
      id
      user
      model
      prompt
      result
    }
  }
`;

const SaveDataButton = ({ user, model, prompt, result }) => {
  const [createDataEntry] = useMutation(CREATE_DATA_ENTRY);

  const handleSave = () => {
    console.log(user, model, prompt, result);
    createDataEntry({
      variables: {
        user,
        model,
        prompt,
        result
      }
    })
      .then(response => {
        // Manejar la respuesta de la mutación si es necesario
        console.log(response);
      })
      .catch(error => {
        // Manejar el error si ocurre
        console.error("error:", error);
      });
  };

  return (
    <button onClick={handleSave}>Guardar resultado</button>
  );
};

export default SaveDataButton;