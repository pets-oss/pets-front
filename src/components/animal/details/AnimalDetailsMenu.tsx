import React from 'react';
import { useHistory } from 'react-router-dom';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { Fade } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function AnimalDetailsMenu({ id }) {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleEdit = () => {
        history.push(`/animal/${id}/edit`);
        handleClose();
    };

    return (
        <>
            <IconButton
                aria-label="animal controls"
                aria-controls="animal-control-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="animal-control-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>...</MenuItem>
            </Menu>
        </>
    );
}

export default AnimalDetailsMenu;
