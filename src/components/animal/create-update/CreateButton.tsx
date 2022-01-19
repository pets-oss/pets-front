import React from 'react';
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import { Button, Fab, styled } from '@mui/material';
import useNavMobile from '../../../hooks/useNavMobile';
import { BOTTOM_NAVIGATION_HEIGHT } from '../../layout/AppBottomNavigation';

const StyledFab = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    zIndex: theme.zIndex.appBar + 1,
    right: theme.spacing(4),
    bottom: BOTTOM_NAVIGATION_HEIGHT,
    transform: 'translateY(50%)',
}));

export default function CreateButton() {
    const navigate = useNavigate();
    const matchesNavMobile = useNavMobile();

    const handleClick = () => {
        navigate('/animal/new');
    };

    if (matchesNavMobile) {
        return (
            <StyledFab color="primary" aria-label="add" onClick={handleClick}>
                <AddIcon />
            </StyledFab>
        );
    }

    return (
        <Button variant="contained" color="primary" onClick={handleClick} startIcon={<AddIcon />}>
            Create
        </Button>
    );
}
