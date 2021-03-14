import React, { memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { RegistrationStatus } from '../../../graphql/types';
import TextInput from '../../form/TextInput';

export enum AnimalIncomingType {
    RESCUED = 'rescued',
    GIVEN_AWAY = 'given_away',
}

function RegistrationStep({ onPrev }: RegistrationStepProps) {
    const classes = useStyles();
    const { control, register } = useFormContext();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={12}>
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        name="registration.incomingType"
                        render={props => (
                            <RadioGroup value={props.value} onChange={(e, val) => props.onChange(val)}>
                                <FormControlLabel
                                    value={AnimalIncomingType.RESCUED}
                                    control={<Radio size="small" />}
                                    label="Rescued"
                                />
                                <FormControlLabel
                                    value={AnimalIncomingType.GIVEN_AWAY}
                                    control={<Radio size="small" />}
                                    label="Given away"
                                />
                            </RadioGroup>
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.relative}>
                    <TextInput
                        name="registration.nr"
                        label="Registration No."
                        id="registration.nr"
                        fullWidth
                        showLettersCount
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput
                        type="date"
                        name="registration.date"
                        label="Registration date"
                        id="registration.date"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        name="registration.status"
                        render={props => (
                            <RadioGroup value={props.value} onChange={(e, val) => props.onChange(val)}>
                                <FormControlLabel
                                    value={RegistrationStatus.Active}
                                    control={<Radio size="small" />}
                                    label="Active"
                                />
                                <FormControlLabel
                                    value={RegistrationStatus.Inactive}
                                    control={<Radio size="small" />}
                                    label="Inactive"
                                />
                            </RadioGroup>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox size="small" />}
                        label="Create rescue event"
                        name="createEvent"
                        inputRef={register}
                    />
                </Grid>
            </Grid>
            <Grid item container>
                <Divider style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} container spacing={2} justify="center">
                <Grid item>
                    <Button color="secondary" variant="outlined" onClick={onPrev}>
                        Back
                    </Button>
                </Grid>
                <Grid item>
                    <Button type="submit" color="secondary" variant="contained">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default memo(RegistrationStep);

interface RegistrationStepProps {
    onPrev: () => void;
}

const useStyles = makeStyles(() => ({
    relative: {
        position: 'relative',
    },
}));
