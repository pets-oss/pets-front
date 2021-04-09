import clsx from 'clsx';
import { loader } from 'graphql.macro';
import MUIRichTextEditor from 'mui-rte';
import React, { memo, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Species } from '../../../graphql/types';
import DynamicSelector from '../../form/DynamicSelector';
import TextInput from '../../form/TextInput';

const GET_SPECIES = loader('../../../graphql/queries/species.graphql');
const GET_GENDERS = loader('../../../graphql/queries/genders.graphql');
const GET_BREEDS = loader('../../../graphql/queries/breeds.graphql');
const GET_COLORS = loader('../../../graphql/queries/colors.graphql');
const GET_STATUSES = loader('../../../graphql/queries/statuses.graphql');

const save = data => {
    console.log(data.getData());
};

function DetailsStep({ onNext }: DetailsStepProps) {
    const classes = useStyles();
    const { control, setValue } = useFormContext();
    const history = useHistory();

    const specie = useWatch({
        control,
        name: 'details.specie',
        defaultValue: undefined,
    });

    useEffect(() => {
        setValue('breed', undefined);
    }, [specie, setValue]);

    const handleCancel = () => {
        history.push('/');
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} container spacing={2} justify="center">
                <Grid item xs={12} sm={4} className={clsx(classes.name, classes.relative)}>
                    <TextInput name="name" label="Name" id="name" fullWidth showLettersCount />
                </Grid>
            </Grid>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <DynamicSelector
                        name="details.specie"
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
                        label="Gender"
                        disabled={!specie}
                        gqlOptions={{
                            query: GET_BREEDS,
                            variables: { species: (specie as Species | undefined)?.id, language: 'lt' },
                            type: 'breeds',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DynamicSelector
                        name="details.color"
                        label="Color"
                        gqlOptions={{ query: GET_COLORS, variables: { language: 'lt' }, type: 'colors' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput
                        type="date"
                        name="details.birthDate"
                        id="birthDate"
                        label="Birth date"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput name="imageUrl" label="Image URL" id="imageUrl" fullWidth />
                </Grid>
                <Grid item xs={12} className={classes.relative}>
                    <MuiThemeProvider theme={defaultTheme}>
                        <MUIRichTextEditor
                            label="Type here your description"
                            onSave={save}
                            inlineToolbar
                            maxLength={200}
                        />
                    </MuiThemeProvider>
                    {/* <TextInput
                            name="description"
                            label="Description"
                            id="description"
                            fullWidth
                            showLettersCount
                            maxLength={200}
                        /> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DynamicSelector
                        name="status"
                        gqlOptions={{ query: GET_STATUSES, variables: { language: 'lt' }, type: 'statuses' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput name="details.weight" id="weight" label="Weight, kg" type="number" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput name="details.allergy" id="allergy" label="Allergy" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput name="details.food" id="food" label="Food" fullWidth />
                </Grid>
            </Grid>
            <Grid item container>
                <Divider style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} container spacing={2} justify="center">
                <Grid item>
                    <Button color="secondary" variant="outlined" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Grid>
                <Grid item>
                    <Button color="secondary" variant="contained" onClick={onNext}>
                        Next
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles(() => ({
    form: {
        maxWidth: 800,
    },
    name: {
        minWidth: 300,
    },
    relative: {
        position: 'relative',
    },
    fullWidth: {
        width: '100%',
    },
    richTextEditorContainer: {
        position: 'relative',
        height: '100px',
        border: '1px #757575 solid',
    },
}));

const defaultTheme = createMuiTheme();

Object.assign(defaultTheme, {
    overrides: {
        MUIRichTextEditor: {
            root: {
                width: '100%',
                border: '1px #c7c2be solid',
                // '&:hover': {
                //     border: 'rgba (0, 0, 0, 0.87)',
                // },
                // '&:focus': {
                //     border: '#4e2c1a',
                // },
                borderRadius: '4px',
            },
            editor: {
                height: '300px',
            },
        },
    },
});

export default memo(DetailsStep);

interface DetailsStepProps {
    onNext: () => void;
}
