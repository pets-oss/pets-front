import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { Omit } from "@material-ui/types";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


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
  menuItem: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  hasIconAndText: {
    '& .MuiListItemIcon-root': {
      marginRight: 4,
    }
  }
}));
interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary?: string;
  to: string;
  className?: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to, className } = props;
  const classes = useStyles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink className={classes.menuItem} to={to} ref={ref} {...itemProps} />
      )),
    [to, classes],
  );

  return (
    <li>
      <ListItem className={className} button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        {primary ? <ListItemText primary={primary} /> : null}
      </ListItem>
    </li>
  );
}

const isUserLoggedIn = true;

export default function SiteTopNavigation() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            PetBook
          </Typography>
          <List component="nav" className={classes.toolbarMenuRow} aria-label="top navigation">
            {useMediaQuery(theme.breakpoints.up('sm')) ? (
              <>
                <ListItemLink to="/" primary="Home" />
                <ListItemLink to="/about" primary="About" />
                {isUserLoggedIn ? <ListItemLink to="/animal-list" primary="Animals" /> : null}
              </>
            ) : null}
            {isUserLoggedIn ? (
              <>
                <ListItemLink to="/user-profile" primary="UserName" className={classes.hasIconAndText} icon={<AccountCircleTwoToneIcon />} />
                <Divider orientation="vertical" flexItem />
                <ListItemLink to="/logout" icon={<ExitToAppTwoToneIcon />} />
              </>
            ) : (
              <ListItemLink to="/login" primary="Login" className={classes.hasIconAndText} icon={<AccountCircleTwoToneIcon />} />
            )}
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
