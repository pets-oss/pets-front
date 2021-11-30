import { loader } from 'graphql.macro';
import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Box } from '@mui/material';
import { Species } from '../../../graphql/types';
import usePrevious from '../../../hooks/usePrevious';
import DynamicSelector from '../../form/DynamicSelector';

const GET_SPECIES = loader('../../../graphql/queries/species.graphql');
const GET_GENDERS = loader('../../../graphql/queries/genders.graphql');
const GET_BREEDS = loader('../../../graphql/queries/breeds.graphql');

export default function AnimalFiltersDialogContents() {
    const { control, setValue } = useFormContext();

    const species = useWatch({
        control,
        name: 'species',
        defaultValue: null,
    });

    const prevSpecies = usePrevious({ species });

    useEffect(() => {
        const speciesHasChangedInUi =
            prevSpecies !== undefined && prevSpecies.species !== null && prevSpecies.species !== species;
        if (!species || speciesHasChangedInUi) {
            setValue('breed', null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [species, setValue]);

    // NOTE:
    // if Species input will be multiple, it will compromise Breeds!
    // Breeds cannot be selected of multiple species in the moment.
    // The Solution - let single selections only.

    return (
        <>
            <Box marginTop={2.5} marginBottom={2.5}>
                <DynamicSelector
                    name="species"
                    label="Species"
                    gqlOptions={{ query: GET_SPECIES, variables: { language: 'lt' }, type: 'species' }}
                />
            </Box>
            <Box marginTop={2.5} marginBottom={2.5}>
                <DynamicSelector
                    name="breed"
                    label="Breed"
                    disabled={!species}
                    gqlOptions={{
                        query: GET_BREEDS,
                        variables: { species: ((species as Species)?.id || '').toString(), language: 'lt' },
                        type: 'breeds',
                    }}
                />
            </Box>
            <Box marginTop={2.5} marginBottom={2.5}>
                <DynamicSelector
                    name="gender"
                    label="Gender"
                    gqlOptions={{ query: GET_GENDERS, variables: { language: 'lt' }, type: 'genders' }}
                />
            </Box>
        </>
    );
}
