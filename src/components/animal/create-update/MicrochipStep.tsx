import React, { memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Button, Divider, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import TextInput from '../../form/TextInput';

export enum MicrochipStatus {
    Implanted = 'implanted',
    Removed = 'removed',
}

function MicrochipStep({ onPrev, onNext }: MicrochipStepProps) {
    const { control } = useFormContext();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextInput name="chip.id" label="Microchip ID" id="chip.id" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput name="chip.companyId" label="Microchip company ID" id="chip.companyId" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput
                        type="date"
                        name="chip.installDate"
                        id="chip.installDate"
                        label="Microchip installation date"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextInput
                        name="chip.installPrice"
                        label="Microchip install price"
                        id="chip.installPrice"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        rules={{ required: true }}
                        control={control}
                        name="chip.status"
                        render={props => (
                            <RadioGroup value={props.field.value} onChange={(e, val) => props.field.onChange(val)}>
                                <FormControlLabel
                                    value={MicrochipStatus.Implanted}
                                    control={<Radio size="small" />}
                                    label="Implanted"
                                />
                                <FormControlLabel
                                    value={MicrochipStatus.Removed}
                                    control={<Radio size="small" />}
                                    label="Removed"
                                />
                            </RadioGroup>
                        )}
                    />
                </Grid>
            </Grid>
            <Grid item container>
                <Divider style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} container spacing={2} justifyContent="center">
                <Grid item>
                    <Button color="secondary" variant="outlined" onClick={onPrev}>
                        Back
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

export default memo(MicrochipStep);

interface MicrochipStepProps {
    onPrev: () => void;
    onNext: () => void;
}
