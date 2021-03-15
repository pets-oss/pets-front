import React, { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Grid, GridProps, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Breed, Color, Gender, RegistrationStatus, Species, Status } from '../../../graphql/types';
import useResize from '../../../hooks/useResize';
import DetailsStep from './DetailsStep';
import MicrochipStep, { MicrochipStatus } from './MicrochipStep';
import RegistrationStep, { AnimalIncomingType } from './RegistrationStep';

const STEP_LABELS = ['Animal details', 'Microchip details', 'Registration details'];
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
    const [step, setStep] = useState(1);
    const formRef = useRef<HTMLFormElement>(null);
    const { width: formWidth } = useResize(formRef);

    const onSubmit = (data: AnimalFormData) => {
        // eslint-disable-next-line no-console
        console.log('FORM DATA: ', data);
    };

    const scrollToTop = () => {
        window.scrollTo({ left: 0, top: 168, behavior: 'smooth' });
    };

    const handleNext = () => {
        setStep(step + 1);
        scrollToTop();
    };

    const handlePrev = () => {
        setStep(step - 1);
        scrollToTop();
    };

    return (
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
                <Grid item xs={12} className={classes.fullWidth}>
                    <Stepper activeStep={step - 1} alternativeLabel className={classes.stepper}>
                        {STEP_LABELS.map(label => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
                <Grid item xs={12} className={classes.stepsWrapper}>
                    <Box
                        style={{ width: formWidth * 3, transform: `translate3d(${-formWidth * (step - 1)}px,0px,0px)` }}
                        className={classes.steps}
                    >
                        <DetailsStep onNext={handleNext} />
                        <MicrochipStep onNext={handleNext} onPrev={handlePrev} />
                        <RegistrationStep onPrev={handlePrev} />
                    </Box>
                </Grid>
            </Grid>
        </FormProvider>
    );
}

export function FormRow({ children, ...props }: GridProps) {
    return (
        <Grid item xs={12} container spacing={2} {...props}>
            {children}
        </Grid>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    form: {
        maxWidth: 800,
    },
    stepper: {
        background: 'transparent',
    },
    fullWidth: {
        width: '100%',
    },
    stepsWrapper: {
        overflow: 'hidden',
    },
    steps: {
        display: 'flex',
        alignItems: 'baseline',
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
        }),
    },
}));

export interface AnimalFormData {
    name?: string;
    organizationId?: number;
    status?: Status;
    imageUrl?: string;
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
