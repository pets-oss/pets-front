import clsx from 'clsx';
import React from 'react';

import { Avatar } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Pets } from '@material-ui/icons';
import { Gender, Species } from '../../graphql/types';
import IconCat from './IconCat';
import IconDog from './IconDog';

export default function AnimalAvatar({ species, gender }: AnimalAvatarProps) {
    const classes = useStyles();

    if (!species) {
        species = {} as Species;
    }

    if (!species) {
        species = { id: '0', value: 'Undefined' };
    }

    return (
        <Avatar className={clsx(resolveGenderClass(gender))} aria-label="species and gender icon">
            {AnimalSpeciesIcon(species)}
            <IconDog />
        </Avatar>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    unknown: {
        backgroundColor: theme.palette.grey['300'],
    },
    genderUndefined: {
        color: 'white',
        backgroundColor: theme.palette.grey['300'],
    },
    gender1: {
        color: '#0d47a1',
        backgroundColor: '#42a5f5',
    },
    gender2: {
        color: '#880e4f',
        backgroundColor: '#f06292',
    },
}));

type OptionalGender = Gender | undefined | null;
type OptionalSpecies = Species | undefined | null;

interface AnimalAvatarProps {
    species?: Species;
    gender?: Gender;
}

const VALID_GENDER_IDS = ['1', '2'];
const VALID_SPECIES_IDS = ['1', '2'];

const resolveGenderClass = (gender: OptionalGender) => {
    let result = 'genderUndefined';

    if (gender && VALID_GENDER_IDS.includes(gender.id)) {
        result = `gender${gender.id}`;
    }

    return result;
};

const AnimalSpeciesIcon = (species: OptionalSpecies) => {
    if (species && VALID_SPECIES_IDS.includes(species.id)) {
        switch (species.id) {
            case '1':
                return <IconDog />;
            case '2':
                return <IconCat />;
            default:
                return <Pets />;
        }
    }
    return <Pets />;
};
