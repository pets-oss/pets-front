import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Button, Chip, Grid } from '@material-ui/core';
import { Breed, Gender, Species } from '../../../graphql/types';
import { removeAnimalsFilterWithFilterObj, setAnimalsFiltersWithFilterObjs } from '../../../store/animalsAll';

const FILTER_PROPS = ['species', 'gender', 'breed'];

export default function AnimalFiltersChips() {
    const dispatch = useDispatch();
    const { queryVars, queryVarsFilterObjs } = useSelector((state: RootStateOrAny) => state.animalsAll);

    const hasFilters = Object.keys(queryVars).filter(key => FILTER_PROPS.includes(key)).length > 0;

    const handleClearFilters = () => {
        dispatch(setAnimalsFiltersWithFilterObjs({}));
    };

    const onDelete = (filter: Species | Breed | Gender) => {
        dispatch(removeAnimalsFilterWithFilterObj(filter));
    };

    const filterChip = (type, filter) => (
        <Grid item key={`${type}-${filter.id}`}>
            <Chip label={filter.value} onDelete={() => onDelete(filter)} />
        </Grid>
    );

    if (hasFilters) {
        return (
            <Grid container spacing={1}>
                {Object.keys(queryVarsFilterObjs).map(type => {
                    if (queryVarsFilterObjs[type]) {
                        return queryVarsFilterObjs[type].map(filter => filterChip(type, filter));
                    }
                })}
                <Button onClick={handleClearFilters}>Clear</Button>
            </Grid>
        );
    } else {
        return null;
    }
}
