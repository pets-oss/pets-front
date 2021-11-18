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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryVars]);

    const handleClearFilters = () => {
        dispatch(setAnimalsFiltersWithFilterObjs({}));
    };

    const onDelete = (filter: Filter) => {
        // todo - remove
        console.log('onDelete', filter, JSON.stringify(queryVarsFilterObjs));

        const newFilterObjs = {};
        FILTER_PROPS.map(type => {
            const filterPropList = queryVarsFilterObjs[type];
            const filterPropValuesAfterDelete = !filterPropList
                ? null
                : filterPropList.filter(prop => {
                      // todo - remove
                      console.log('in', type, 'filter with', prop, filter);
                      return prop.value !== filter.id && type !== filter.type;
                  });
            if (filterPropValuesAfterDelete && filterPropValuesAfterDelete.length > 0) {
                newFilterObjs[type] = filterPropValuesAfterDelete;
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
    // todo - remove
    console.log('makeFilterValues', JSON.stringify(queryVars), JSON.stringify(queryVarsFilterObjs));
    const filters: Filter[] = [];
    const { species: speciesObjList, breed: breedObjList, gender: genderObjList } = queryVarsFilterObjs;

    // todo - optimize
    if (queryVars.species) {
        queryVars.species.map(speciesItem => {
            const labelDisplay = getFilterPropValue(speciesItem, speciesObjList);
            if (typeof labelDisplay === 'string') {
                filters.push({
                    type: 'species',
                    label: labelDisplay,
                    id: speciesItem,
                });
            }
        });
    }
    if (queryVars.breed) {
        queryVars.breed.map(breedItem => {
            const labelDisplay = getFilterPropValue(breedItem, breedObjList);
            if (typeof labelDisplay === 'string') {
                filters.push({
                    type: 'breed',
                    label: labelDisplay,
                    id: breedItem,
                });
            }
        });
    }
    if (queryVars.gender) {
        queryVars.gender.map(genderItem => {
            const labelDisplay = getFilterPropValue(genderItem, genderObjList);
            if (typeof labelDisplay === 'string') {
                filters.push({
                    type: 'gender',
                    label: labelDisplay,
                    id: genderItem,
                });
            }
        });
    }
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
    return found?.value ?? 'unknown';
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
