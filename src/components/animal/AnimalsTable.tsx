import React from 'react';
import { useNavigate } from 'react-router-dom';

import { alpha, Avatar, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Animal } from '../../graphql/types';
import { getAnimalAge } from '../../utils/animal';

interface AnimalsTableProps {
    animals: Animal[];
}

const PREFIX = 'AnimalsTable';

const classes = {
    headRow: `${PREFIX}-headRow`,
    head: `${PREFIX}-head`,
    row: `${PREFIX}-row`,
};

const StyledTable = styled(Table)(({ theme }) => ({
    width: '100%',
    backgroundColor: alpha(theme.palette.background.paper, 0.4),

    [classes.headRow]: {
        backgroundColor: alpha(theme.palette.primary.dark, 0.75),
    },
    [classes.head]: {
        color: theme.palette.text.secondary,
    },
    [classes.row]: {
        cursor: 'pointer',
        textDecoration: 'none',
    },
}));

export default function AnimalsTable({ animals }: AnimalsTableProps) {
    const navigate = useNavigate();

    const onRowClick = (animalId?: number) => {
        navigate(`/animal/${animalId}`);
    };

    return (
        <TableContainer>
            <StyledTable size="small" aria-label="animals">
                <TableHead>
                    <TableRow className={classes.headRow}>
                        <TableCell align="center" className={classes.head} />
                        <TableCell align="center" className={classes.head}>
                            Specie
                        </TableCell>
                        <TableCell align="center" className={classes.head}>
                            Name
                        </TableCell>
                        <TableCell align="center" className={classes.head}>
                            Breed
                        </TableCell>
                        <TableCell align="center" className={classes.head}>
                            Weight, kg
                        </TableCell>
                        <TableCell align="center" className={classes.head}>
                            Age
                        </TableCell>
                        <TableCell align="center" className={classes.head}>
                            Checked in
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {animals.map(animal => (
                        <TableRow key={animal?.id} hover onClick={() => onRowClick(animal?.id)} className={classes.row}>
                            <TableCell align="center">
                                <Avatar
                                    alt="Animal picture"
                                    src={
                                        animal?.imageUrl
                                            ? animal?.imageUrl
                                            : `https://eu.ui-avatars.com/api/?name=${animal?.name}`
                                    }
                                />
                            </TableCell>
                            <TableCell align="center">Dog</TableCell>
                            <TableCell align="center">{animal?.name}</TableCell>
                            <TableCell align="center">Puddle</TableCell>
                            <TableCell align="center">{animal?.details?.weight}</TableCell>
                            <TableCell align="center">{getAnimalAge(animal?.details?.birthDate)}</TableCell>
                            <TableCell align="center">check-in date</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </TableContainer>
    );
}
