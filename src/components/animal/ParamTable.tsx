import React from 'react';

import { Box, makeStyles, Theme } from '@material-ui/core';

export default function ParamTable({ params }: ParamTableProps) {
  const classes = useStyles();
  return (
        <Box>
          {params.map((param: ParamTableRow, index: number) => {
                return (
                <Box className={classes.box} key={index} display="flex" justifyContent="space-between">
                        <Box className={classes.title}>{param.title}</Box>
                        <Box>{param.value}</Box>
                    </Box>
              );
            })}
      </Box>
  );
}

interface ParamTableProps {
  params: ParamTableRow[];
}

interface ParamTableRow {
  title: string;
  value: string | number;
}

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    borderBottom: `1px solid ${theme.palette.tertiary.dark}`,
  },
  title: {
    fontWeight: 1000,
  },
}));
