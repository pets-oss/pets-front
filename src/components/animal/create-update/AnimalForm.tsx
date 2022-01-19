import React, { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Box, Grid, GridProps } from '@mui/material';
import { Animal, AnimalDetails } from '../../../graphql/types';
import { useAppDispatch } from '../../../store';
import { createOrUpdateAnimal } from '../../../store/animals';
import { getDateYMDFlexible, getYMDDateFromTS } from '../../../utils/dateFormatters';
import DetailsStep from './DetailsStep';

export default function AnimalForm({ animal, submitCallback }: AnimalFormProps) {
    const methods = useForm({ defaultValues: getDefaultFormValues(animal) });
    const { handleSubmit, reset } = methods;
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (animal) {
            reset(getDefaultFormValues(animal));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animal]);

    const onSubmit = async (formData: AnimalFormData) => {
        // filter/cleanup RichTextEditorField
        if (formData.comments === '<p><br></p>') {
            formData.comments = '';
        }

        // convert birthDate string to TS
        if (formData.details?.birthDate) {
            formData.details.birthDate = getDateYMDFlexible(formData.details?.birthDate) as string;
        }

        if (animal) {
            formData.id = animal.id;
        }
        const resultAction = await dispatch(createOrUpdateAnimal(formData));

        if (createOrUpdateAnimal.fulfilled.match(resultAction)) {
            submitCallback(null);
        } else {
            // returns error message after bad insert
            submitCallback(resultAction.payload);
        }
    };

    return (
        <Box display="flex" justifyContent="center" sx={{ maxWidth: 800, margin: '0 auto' }}>
            <FormProvider {...methods}>
                <Box onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    <DetailsStep />
                </Box>
            </FormProvider>
        </Box>
    );
}

const getDefaultFormValues = (animal?: Animal): AnimalFormData => {
    // adjust birthData format to form string input
    return animal
        ? { ...animal, details: { ...animal.details, birthDate: getYMDDateFromTS(animal.details?.birthDate) } }
        : { details: { birthDate: getYMDDateFromTS(Date.now().toString()) } };
};

export function FormRow({ children, ...props }: GridProps) {
    return (
        <Grid item xs={12} container spacing={2} {...props}>
            {children}
        </Grid>
    );
}

interface AnimalFormProps {
    animal?: Animal;
    submitCallback: (error: any) => void;
}

export interface AnimalFormData extends Partial<Omit<Animal, 'details'>> {
    id?: number;
    details?: Partial<AnimalDetails>;
}

// todo createEvent prop.
