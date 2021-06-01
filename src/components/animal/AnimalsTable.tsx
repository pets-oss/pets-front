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
import { AnimalEdge } from '../../graphql/types';
import { getAnimalAge } from '../../utils/animal';

interface AnimalsTableProps {
    animals: AnimalEdge[];
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
                        <TableRow
                            key={animal?.node?.id}
                            hover
                            onClick={() => onRowClick(animal?.node?.id)}
                            className={classes.row}
                        >
                            <TableCell align="center">
                                <Avatar
                                    alt="Animal picture"
                                    src={
                                        animal?.node?.imageUrl
                                            ? animal?.node?.imageUrl
                                            : `https://eu.ui-avatars.com/api/?name=${animal?.node?.name}`
                                    }
                                />
                            </TableCell>
                            <TableCell align="center">Dog</TableCell>
                            <TableCell align="center">{animal?.node?.name}</TableCell>
                            <TableCell align="center">Puddle</TableCell>
                            <TableCell align="center">{animal?.node?.details?.weight}</TableCell>
                            <TableCell align="center">{getAnimalAge(animal?.node?.details?.birthDate)}</TableCell>
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
