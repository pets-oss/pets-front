import { loader } from 'graphql.macro';
import React, { memo, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Divider, Grid, styled, Typography } from '@mui/material';
import { Species } from '../../../graphql/types';
import usePrevious from '../../../hooks/usePrevious';
import { getDateYMDFlexible } from '../../../utils/dateFormatters';
import DynamicSelector from '../../form/DynamicSelector';
import RichTextEditor from '../../form/RichTextEditor';
import TextInput from '../../form/TextInput';

const GET_SPECIES = loader('../../../graphql/queries/species.graphql');
const GET_GENDERS = loader('../../../graphql/queries/genders.graphql');
const GET_BREEDS = loader('../../../graphql/queries/breeds.graphql');
const GET_COLORS = loader('../../../graphql/queries/colors.graphql');

const EMPTY_NAME = 'New Animal';

const PREFIX = 'DetailsStep';

const classes = {
    relative: `${PREFIX}-relative`,
    fullWidth: `${PREFIX}-fullWidth`,
};

const StyledGrid = styled(Grid)(() => ({
    relative: {
        position: 'relative',
    },
    fullWidth: {
        width: '100%',
    },
}));

function DetailsStep() {
    const { control, setValue } = useFormContext();
    const navigate = useNavigate();

    const name = useWatch({
        control,
        name: 'name',
    });

    const species = useWatch({
        control,
        name: 'details.species',
        defaultValue: null,
    });

    const prevSpecies = usePrevious({ species });

    useEffect(() => {
        const speciesHasChangedInUi =
            prevSpecies !== undefined && prevSpecies.species !== null && prevSpecies.species !== species;
        if (!species || speciesHasChangedInUi) {
            setValue('details.breed', null);
            setValue('details.color', null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [species, setValue]);

    const handleCancel = () => {
        navigate('/animal-list');
    };

    const dateInputValidation = (input: string) => {
        return false !== getDateYMDFlexible(input);
    };

    return (
        <StyledGrid container spacing={2}>
            <Grid item xs={12} container justifyContent="center">
                <Grid item spacing={2}>
                    {!!name ? (
                        <Typography variant="h5">{name}</Typography>
                    ) : (
                        <Typography variant="h5">{EMPTY_NAME}</Typography>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
                <Grid item xs={12} sm={6} className={classes.relative} spacing={2}>
                    <TextInput name="name" label="Name" required helperText=" " fullWidth showLettersCount />
                </Grid>
            </Grid>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <DynamicSelector
                        name="details.species"
                        label="Specie"
                        gqlOptions={{ query: GET_SPECIES, variables: { language: 'lt' }, type: 'species' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DynamicSelector
                        name="details.gender"
                        label="Gender"
                        gqlOptions={{ query: GET_GENDERS, variables: { language: 'lt' }, type: 'genders' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DynamicSelector
                        name="details.breed"
                        label="Breed"
                        disabled={!species}
                        gqlOptions={{
                            query: GET_BREEDS,
                            variables: { species: (species as Species | undefined)?.id.toString(), language: 'lt' },
                            type: 'breeds',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DynamicSelector
                        name="details.color"
                        label="Color"
                        gqlOptions={{
                            query: GET_COLORS,
                            variables: { language: 'lt', speciesId: (species as Species | undefined)?.id },
                            type: 'colors',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput
                        name="details.birthDate"
                        id="birthDate"
                        label="Birth date"
                        placeholder="yyyy-mm-dd, yyyy-mm or yyyy"
                        helperText="Format date as a yyyy(-mm(-dd))"
                        validate={dateInputValidation}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} className={classes.relative}>
                    <RichTextEditor name="comments" maxLength={200} />
                </Grid>
            </Grid>
            <Grid item container>
                <Divider sx={{ width: '100%', my: 3 }} />
            </Grid>
            <Grid item xs={12} container spacing={2} justifyContent="center">
                <Grid item>
                    <Button color="primary" variant="outlined" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Grid>
                <Grid item>
                    <Button type="submit" color="primary" variant="contained">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </StyledGrid>
    );
}

export default memo(DetailsStep);
