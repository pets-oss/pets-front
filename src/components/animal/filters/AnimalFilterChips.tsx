import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

import { Button, Chip, Grid } from '@material-ui/core';
import { Breed, Gender, Species } from '../../../graphql/types';
import { setAnimalsFiltersWithFilterObjs } from '../../../store/animalsAll';

const FILTER_PROPS = ['species', 'gender', 'breed'];

export default function AnimalFiltersChips() {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState<Filter[]>([]);
    const { queryVars, queryVarsFilterObjs } = useSelector((state: RootStateOrAny) => state.animalsAll);

    const hasFilters = Object.keys(queryVars).filter(key => FILTER_PROPS.includes(key)).length > 0;

    useEffect(() => {
        setFilters(makeFilterValues(queryVars, queryVarsFilterObjs));
        // Note: intentionally dependency is only queryVars
        // (in store both params change in different time, and only queryVars is important here)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryVars]);

    const handleClearFilters = () => {
        dispatch(setAnimalsFiltersWithFilterObjs({}));
    };

    const onDelete = (filter: Filter) => {
        const newFilterObjs = {};

        FILTER_PROPS.map(type => {
            const filterPropListResult = !queryVarsFilterObjs[type]
                ? null
                : queryVarsFilterObjs[type].filter(prop => prop.value !== filter.id && type !== filter.type);

            if (filterPropListResult && filterPropListResult.length > 0) {
                newFilterObjs[type] = filterPropListResult;
            } else {
                newFilterObjs[type] = null;
            }
        });
        dispatch(setAnimalsFiltersWithFilterObjs(newFilterObjs));
    };

    return (
        <Grid container spacing={1}>
            {filters.map(filter => (
                <Grid item key={`${filter.type}-${filter.id}`}>
                    <Chip label={filter.label} onDelete={() => onDelete(filter)} />
                </Grid>
            ))}
            {hasFilters && <Button onClick={handleClearFilters}>Clear</Button>}
        </Grid>
    );
}

const makeFilterValues = (queryVars, queryVarsFilterObjs) => {
    const filters: Filter[] = [];

    FILTER_PROPS.map(type => {
        if (queryVars[type]) {
            queryVars[type].map(id => {
                const objsList = queryVarsFilterObjs[type];
                const label = getFilterPropValue(id, objsList);
                if (typeof label === 'string') {
                    filters.push({
                        type: type,
                        label: label,
                        id: id,
                    });
                }
            });
        }
    });
    return filters;
};

const getFilterPropValue = (id: number, dataset: Species[] | Breed[] | Gender[]): string | boolean => {
    if (!dataset || dataset.length === 0) {
        return false;
    }
    const genericDataset = dataset as GenericDataset[];
    const found = genericDataset.find(item => item.id === id);
    if (!found) {
        return false;
    }
    return found.value;
};

interface Filter {
    id: number;
    type: string;
    label: string;
}

interface GenericDataset {
    id: number;
    value: string;
}
