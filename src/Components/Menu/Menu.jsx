import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: 0,
  },
}));

export const MenuList = ({ user }) => {
  /*  Code to handle open/close of MENU */
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  /*  Code to handle open/close of MENU */

  console.log(user);
  const classes = useStyles();
  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          {' '}
          <ListItemIcon>
            <LockOpenSharpIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">
            <Link to="/SignIn">Sign In</Link>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {' '}
          <ListItemIcon>
            <SearchIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Search Stock</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {' '}
          <ListItemIcon>
            <ExitToAppSharpIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Log Out</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
