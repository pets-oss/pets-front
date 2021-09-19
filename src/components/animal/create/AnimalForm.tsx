import React, { useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Grid, GridProps } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Breed, Color, Gender, Species } from '../../../graphql/types';
import LayoutAlignCenterBox from '../../layout/LayoutAlignCenterBox';
import DetailsStep from './DetailsStep';

const DEFAULT_VALUES: AnimalFormData = {
    name: '',
    createEvent: false,
};

export default function AnimalForm() {
    const classes = useStyles();
    const methods = useForm({ defaultValues: DEFAULT_VALUES });
    const { handleSubmit } = methods;
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit = (data: AnimalFormData) => {
        // eslint-disable-next-line no-console
        console.log('FORM DATA: ', data);
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
