import React, { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid, GridProps } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Animal, Breed, Color, Gender, Species } from '../../../graphql/types';
import { createOrUpdateAnimal } from '../../../store/animalsAll';
import { getDateYMDFlexible, getYMDDateFromTS } from '../../../utils/dateFormatters';
import LayoutAlignCenterBox from '../../layout/LayoutAlignCenterBox';
import DetailsStep from './DetailsStep';

export default function AnimalForm({ animal }: AnimalFormProps) {
    const classes = useStyles();
    const history = useHistory();

    const methods = useForm({ defaultValues: getDefaultFormValues(animal) });
    const { handleSubmit, reset } = methods;
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (animal) {
            reset(getDefaultFormValues(animal));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animal]);

    const onSubmit = (formData: AnimalFormData) => {
        const normalizedFormData = normalizeFormData(formData);
        // eslint-disable-next-line no-console
        console.log('FORM DATA: ', formData, JSON.stringify(formData));

        if (animal) {
            formData.id = animal.id;
        }
        dispatch(createOrUpdateAnimal(normalizedFormData, submitCallback));
    };

    const submitCallback = (error: any) => {
        if (error === null) {
            history.push('/animal-list');
        } else {
            // todo - should show error on UI
            console.error('AnimalForm', error);
        }
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

const getDefaultFormValues = (animal?: Animal) => {
    // adjust birthData format to form string input
    return animal
        ? { ...animal, details: { ...animal.details, birthDate: getYMDDateFromTS(animal.details?.birthDate) } }
        : { details: { birthDate: getYMDDateFromTS(Date.now().toString()) } };
};

const normalizeFormData = formData => {
    // filter/cleanup RichTextEditorField
    if (formData.comments === '<p><br></p>') {
        formData.comments = '';
    }
    // convert birthDate string to TS
    if (formData.details?.birthDate) {
        formData.details.birthDate = getDateYMDFlexible(formData.details?.birthDate);
    }
    return formData;
};

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
    animal?: Animal;
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
