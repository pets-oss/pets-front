import React from 'react';

import { Container, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

type NewEventProps = {
    eventOpen: boolean;
    seteventOpen: (onClick: boolean) => void;
};

const AnimalNewEvent: React.FC<NewEventProps> = ({ eventOpen, seteventOpen }) => {
    return (
        <Dialog open={eventOpen} onClose={() => seteventOpen(false)}>
            <Container maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h3>Create New Event</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <form noValidate autoComplete="off">
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=""
                                    style={{ width: '25rem' }}
                                >
                                    <MenuItem value="Type" style={{ width: '25rem' }}>
                                        Labas
                                    </MenuItem>
                                    <MenuItem value="Type" style={{ width: '25rem' }}>
                                        Twenty
                                    </MenuItem>
                                    <MenuItem value="Type" style={{ width: '25rem' }}>
                                        Thirty
                                    </MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=""
                                    style={{ width: '25rem' }}
                                >
                                    <MenuItem value="Category">Ten</MenuItem>
                                    <MenuItem value="Category">Twenty</MenuItem>
                                    <MenuItem value="Category">Thirty</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-basic"
                                    style={{ width: '25rem' }}
                                    label="Expenses"
                                    variant="outlined"
                                />
                            </Grid>
                            <TextField
                                id="standard-basic"
                                style={{ width: '25rem' }}
                                label="Comments"
                                variant="outlined"
                            />
                            <TextField id="standard-basic" style={{ width: '25rem' }} label="Date" variant="outlined" />
                        </form>
                    </Grid>
                    <DialogActions>
                        <Button
                            onClick={() => seteventOpen(false)}
                            color="primary"
                            autoFocus
                            variant="outlined"
                            style={{ display: 'flex', justifyContent: 'right' }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => alert('unfinished')}
                            color="secondary"
                            variant="contained"
                            style={{ display: 'flex', justifyContent: 'right' }}
                        >
                            Create
                        </Button>
                    </DialogActions>
                </Grid>
            </Container>
        </Dialog>
    );
};

export default AnimalNewEvent;
