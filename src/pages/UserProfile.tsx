import React from "react";
import { Typography } from "@material-ui/core";

function UserProfile() {
  return (
    <div className="UserProfile-page">
      <Typography variant="h3" component="h1">
        UserProfile page
      </Typography>
      <Typography variant="body1">
        User and Organization details
      </Typography>
    </div>
  );
}

export default UserProfile;
