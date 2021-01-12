import React from "react";
import { Typography } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { Animal } from "../graphql/types"

interface Response {
  animals: Animal[];
}

const GET_ANIMALS_QUERY = loader("../graphql/queries/animal-list.graphql");

function AnimalList() {
  const { loading, error, data } = useQuery<Response>(GET_ANIMALS_QUERY);

  if (loading) {
    // TODO: replace with proper UI elements 
    return <p>Loading...</p>;
  }

  if (error) {
    // TODO: replace with proper UI elements
    return <p>Error!</p>;
  }

  return (
    <div className="AnimalList-page">
      <Typography variant="h3" component="h1">
        AnimalList page
      </Typography>
      <ol>
        {data && data.animals.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ol>
    </div>
  );
}

export default AnimalList;
