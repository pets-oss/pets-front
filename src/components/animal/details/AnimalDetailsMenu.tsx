import React from 'react';
import { useNavigate } from 'react-router-dom';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Fade, IconButton, Menu, MenuItem } from '@mui/material';

function AnimalDetailsMenu({ id }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleEdit = () => {
        navigate(`/animal/${id}/edit`);
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
                color="primary"
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
