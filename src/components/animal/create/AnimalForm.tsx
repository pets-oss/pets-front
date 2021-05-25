import React, { useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Grid, GridProps } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Breed, Color, Gender, RegistrationStatus, Species, Status } from '../../../graphql/types';
import WrapperCenterContainer from '../../layout/WrapperCenterContainer';
import DetailsStep from './DetailsStep';
import { MicrochipStatus } from './MicrochipStep';
import { AnimalIncomingType } from './RegistrationStep';

const DEFAULT_VALUES: AnimalFormData = {
    name: '',
    registration: {
        incomingType: AnimalIncomingType.RESCUED,
        status: RegistrationStatus.Active,
    },
    createEvent: false,
    chip: {
        status: MicrochipStatus.Implanted,
    },
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
        <WrapperCenterContainer>
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
        </WrapperCenterContainer>
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
    status?: Status;
    image?: string;
    description?: string;
    details?: Details;
    registration?: Registration;
    chip?: Chip;
    createEvent?: boolean;
}

interface Details {
    specie?: Species;
    breed?: Breed;
    gender?: Gender;
    color?: Color;
    birthDate?: string;
    weight?: number;
    allergy?: string;
    food?: string;
}

interface Chip {
    id?: string;
    companyId?: string;
    installDate?: string;
    installPrice?: string;
    status?: string;
}

interface Registration {
    incomingType?: AnimalIncomingType;
    nr?: string;
    date?: string;
    status?: RegistrationStatus;
}
