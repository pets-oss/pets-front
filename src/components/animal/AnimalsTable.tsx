import React from 'react';
import { useHistory } from 'react-router-dom';

import { fade, TableContainer, Theme } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Animal } from '../../graphql/types';
import { getAnimalAge } from '../../utils/animal';

interface AnimalsTableProps {
    animals: Animal[];
}

export default function AnimalsTable({ animals }: AnimalsTableProps) {
    const history = useHistory();
    const classes = useStyles();

    const onRowClick = (animalId?: number) => {
        history.push(`/animal/${animalId}`);
    };

    return (
        <TableContainer>
            <Table className={classes.table} size="small" aria-label="animals">
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
            </Table>
        </TableContainer>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    headRow: {
        backgroundColor: fade(theme.palette.primary.dark, 0.75),
    },
    head: {
        color: theme.palette.text.secondary,
    },
    table: {
        width: '100%',
        backgroundColor: fade(theme.palette.background.paper, 0.4),
    },
    row: {
        cursor: 'pointer',
        textDecoration: 'none',
    },
}));
