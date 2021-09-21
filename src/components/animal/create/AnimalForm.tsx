import { loader } from 'graphql.macro';
import React, { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useQuery } from '@apollo/client';
import { Grid, GridProps } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Skeleton } from '@material-ui/lab';
import { Animal, Breed, Color, Gender, Species } from '../../../graphql/types';
import LayoutAlignCenterBox from '../../layout/LayoutAlignCenterBox';
import DetailsStep from './DetailsStep';

const GET_ANIMAL_DETAILS_ON_EDIT = loader('../../../graphql/queries/animal-details-on-edit.graphql');

const DEFAULT_VALUES: AnimalFormData = {
    name: 'New Animal Name',
};

export default function AnimalForm({ id }: AnimalFormProps) {
    const classes = useStyles();
    const { loading, error, data } = useQuery<Response>(GET_ANIMAL_DETAILS_ON_EDIT, {
        variables: { id: Number(id) },
        skip: !id,
    });
    const methods = useForm({ defaultValues: Number(id) ? data?.animal : DEFAULT_VALUES });
    const { handleSubmit, reset } = methods;
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (data?.animal) {
            reset(data.animal);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    if (loading) {
        return <Skeleton animation="wave" variant="rect" height="70vh" width="100%" />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        return <p>Error!</p>;
    }

    const onSubmit = (formData: AnimalFormData) => {
        // eslint-disable-next-line no-console
        console.log('FORM DATA: ', formData);
    };

    return (
        <LayoutAlignCenterBox>
            <FormProvider {...methods}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    component="form"
                    className={classes.form}
                    onSubmit={handleSubmit(onSubmit)}
                    ref={formRef}
                >
                    <DetailsStep />
                </Grid>
            </FormProvider>
        </LayoutAlignCenterBox>
    );
}

export function FormRow({ children, ...props }: GridProps) {
    return (
        <Grid item xs={12} container spacing={2} {...props}>
            {children}
        </Grid>
    );
}

const useStyles = makeStyles(() => ({
    form: {
        maxWidth: 800,
    },
}));

export interface AnimalFormData {
    id?: number;
    name?: string;
    organizationId?: number;
    description?: string;
    details?: Details;
    createEvent?: boolean;
}

interface Details {
    specie?: Species;
    breed?: Breed;
    gender?: Gender;
    color?: Color;
    birthDate?: string;
}

interface AnimalFormProps {
    id?: string;
}

interface Response {
    animal: Animal;
}
