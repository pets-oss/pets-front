import clsx from 'clsx';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default function ParamTable({ items }: ParamTableProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {items.map((item: ParamTableItem, index: number) => (
                <div className={classes.row} key={`param-row-${index}`}>
                    <div className={clsx(classes.col, classes.title)}>{item.title}</div>
                    <div className={clsx(classes.col, classes.value)}>{item.value ? item.value : 'n.d.'}</div>
                </div>
            ))}
        </div>
    );
}

interface ParamTableProps {
    items: ParamTableItem[];
}

interface ParamTableItem {
    title: string;
    value?: string;
}

const useStyles = makeStyles(theme => ({
    root: {},
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        borderWidth: '0 0 1px 0',
        borderStyle: 'solid',
        borderColor: fade(theme.palette.grey['600'], 0.2),
    },
    col: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        fontSize: '1rem',
    },
    title: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(2),
        fontWeight: 500,
    },
    value: {
        marginLeft: 'auto',
        paddingRight: theme.spacing(1),
        textAlign: 'right',
    },
}));
