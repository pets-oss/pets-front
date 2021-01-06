import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PetsTwoToneIcon from "@material-ui/icons/PetsTwoTone";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

export default function SiteBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
        component={Link}
        to="/animal-list"
        label="Animals" 
        icon={<PetsTwoToneIcon />} 
      />
      <BottomNavigationAction
        component={Link}
        to="/search"
        label="Search"
        icon={<SearchTwoToneIcon />}
      />
    </BottomNavigation>
  );
}
