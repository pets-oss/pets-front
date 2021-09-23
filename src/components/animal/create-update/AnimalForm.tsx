import { loader } from 'graphql.macro';
import React, { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { useQuery } from '@apollo/client';
import { Grid, GridProps } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Skeleton } from '@material-ui/lab';
import { Animal, Breed, Color, Gender, Species } from '../../../graphql/types';
import { createAnimal, updateAnimal } from '../../../store/animalsAll';
import { getTSDateFromYMDFlexible, getYMDDateFromTS } from '../../../utils/dateFormatters';
import LayoutAlignCenterBox from '../../layout/LayoutAlignCenterBox';
import DetailsStep from './DetailsStep';

const GET_ANIMAL_DETAILS_ON_EDIT = loader('../../../graphql/queries/animal-details-on-edit.graphql');

const DEFAULT_VALUES: AnimalFormData = {
    details: {
        birthDate: getYMDDateFromTS(Date.now().toString()),
    },
};

export default function AnimalForm({ id }: AnimalFormProps) {
    const classes = useStyles();
    const { loading, error, data } = useQuery<Response>(GET_ANIMAL_DETAILS_ON_EDIT, {
        variables: { id: id },
        skip: !id,
    });
    const methods = useForm({ defaultValues: id ? data?.animal : DEFAULT_VALUES });
    const { handleSubmit, reset } = methods;
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data?.animal) {
            // convert birthDate TS to string
            const animalCopy = Object.assign({}, data.animal, {
                details: { ...data.animal.details, birthDate: getYMDDateFromTS(data.animal.details?.birthDate) },
            });
            reset(animalCopy);
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
        const normalizedFormData = normalizeFormData(formData);
        // eslint-disable-next-line no-console
        console.log('FORM DATA: ', formData, JSON.stringify(formData));

        if (id) {
            formData.id = id;
            dispatch(updateAnimal(normalizedFormData));
        } else {
            dispatch(createAnimal(normalizedFormData));
        }
    };

    const normalizeFormData = formData => {
        // filter/cleanup RichTextEditorField
        formData.comments = '<p><br></p>' ? formData.comments : '';
        // convert birthDate string to TS
        if (formData.details?.birthDate) {
            formData.details.birthDate = getTSDateFromYMDFlexible(formData.details?.birthDate);
        }
        return formData;
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

interface AnimalFormProps {
    id?: number;
}

export interface AnimalFormData {
    id?: number;
    name?: string;
    organizationId?: number;
    comments?: string;
    details?: Details;
    createEvent?: boolean;
}

// todo createEvent prop.

// Details type is declared as it differs from AnimalDetails
interface Details {
    species?: Species;
    breed?: Breed;
    gender?: Gender;
    color?: Color;
    birthDate?: string;
}

interface Response {
    animal: Animal;
}
