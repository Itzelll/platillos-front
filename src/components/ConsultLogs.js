import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DATA_ENTRIES_BY_USER = gql`
  query GetDataEntriesByUser($user: String!) {
    dataEntriesByUser(user: $user) {
      id
      user
      model
      prompt
      result
    }
  }
`;

const GET_DATA_ENTRIES_BY_MODEL = gql`
  query GetDataEntriesByModel($model: String!) {
    dataEntriesByModel(model: $model) {
      id
      user
      model
      prompt
      result
    }
  }
`;

const DataEntriesSearch = () => {
  const [user, setUser] = useState("");
  const [model, setModel] = useState("");
  
  const { loading: loadingUser, data: userData } = useQuery(GET_DATA_ENTRIES_BY_USER, {
    variables: { user },
  });
  
  const { loading: loadingModel, data: modelData } = useQuery(GET_DATA_ENTRIES_BY_MODEL, {
    variables: { model },
  });

  return (
    <div>
      <h3>Search Data Entries</h3>
      
      <form>
        <label>User:</label>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        <button type="submit">Search by User</button>
      </form>
      
      <form>
        <label>Model:</label>
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="">All</option>
          <option value="texto">Texto</option>
          <option value="receta">Receta</option>
          <option value="traductor">Traductor</option>
          <option value="rest">Restaurante</option>
          <option value="tipo">Tipo</option>
        </select>
        <button type="submit">Search by Model</button>
      </form>
      
      <h4>Results:</h4>
      
      {loadingUser && <p>Loading user data...</p>}
      {userData && userData.dataEntriesByUser.map((entry) => (
        <div key={entry.id}>
          <p>User: {entry.user}</p>
          <p>Model: {entry.model}</p>
          <p>Prompt: {entry.prompt}</p>
          <p>Result: {entry.result}</p>
        </div>
      ))}
      
      {loadingModel && <p>Loading model data...</p>}
      {modelData && modelData.dataEntriesByModel.map((entry) => (
        <div key={entry.id}>
          <p>User: {entry.user}</p>
          <p>Model: {entry.model}</p>
          <p>Prompt: {entry.prompt}</p>
          <p>Result: {entry.result}</p>
        </div>
      ))}
    </div>
  );
};

export default DataEntriesSearch;