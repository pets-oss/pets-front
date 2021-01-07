import React from "react";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

interface RouterParams {
  id: string;
}

function Animal() {
  let params: RouterParams = useParams();
  let { id } = params;
  
  return (
    <div className="Animal-page">
      <Typography variant="h3" component="h1">
        Animal page
      </Typography>
      <Typography variant="body1">
        Referencing Animal ID: {id}
      </Typography>
    </div>
  );
}

export default Animal;
