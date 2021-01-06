import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";

import { makeStyles } from "@material-ui/core/styles";


interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    textAlign: 'left',
  },
  toolbarMenuRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function SiteTopNavigation() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            PetBook
          </Typography>
          <List component="nav" className={classes.toolbarMenuRow} aria-label="top navigation">
            <ListItemLink to="/" primary="Home" />
            <ListItemLink to="/about" primary="About" />
            <ListItemLink to="/animal-list" primary="Animals" />
            <ListItemLink to="/user-profile" primary="Profile" />
            <ListItemLink to="/login" primary="Login" icon={<AccountCircleTwoToneIcon />} />
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
