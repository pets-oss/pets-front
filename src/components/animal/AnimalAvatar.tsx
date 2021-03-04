import React from 'react';

import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pets } from '@material-ui/icons';
import { Gender, Species } from '../../graphql/types';
import IconBird from './IconBird';
import IconCat from './IconCat';
import IconDog from './IconDog';
import IconGuineapig from './IconGuineapig';
import IconRabbit from './IconRabbit';
import IconReptile from './IconReptile';

export default function AnimalAvatar({ species, gender }: AnimalAvatarProps) {
    const styleProps = createGenderStyle(gender);
    const classes = useStyles(styleProps);

    return (
        <Avatar className={classes.dynamicAvatar} aria-label="species and gender icon">
            {AnimalSpeciesIcon(species)}
        </Avatar>
    );
}

const useStyles = makeStyles({
    dynamicAvatar: (props: AvatarStyleProps) => ({
        color: props.color,
        backgroundColor: props.backgroundColor,
    }),
});

type OptionalGender = Gender | undefined | null;
type OptionalSpecies = Species | undefined | null;

interface AnimalAvatarProps {
    species: OptionalSpecies;
    gender: OptionalGender;
}
interface AvatarStyleProps {
    color: string;
    backgroundColor: string;
}

const VALID_GENDER_IDS = ['1', '2'];
const VALID_SPECIES_IDS = ['1', '2'];

const createGenderStyle = (gender: OptionalGender): AvatarStyleProps => {
    const gender1 = {
        color: '#3949ab',
        backgroundColor: '#c5cae9',
    };
    const gender2 = {
        color: '#d81b60',
        backgroundColor: '#f8bbd0',
    };
    const genderUndefined = {
        color: 'white',
        backgroundColor: '#e0e0e0',
    };

    if (gender && VALID_GENDER_IDS.includes(gender.id)) {
        switch (gender.id) {
            case '1':
                return gender1;
            case '2':
                return gender2;
            default:
                return genderUndefined;
        }
    }
    return genderUndefined;
};

const AnimalSpeciesIcon = (species: OptionalSpecies) => {
    // available GraphQL enums
    //   {
    //     species(language:"lt") {
    //       id,
    //       value
    //     }
    //   }
    if (species && VALID_SPECIES_IDS.includes(species.id)) {
        switch (species.id) {
            case '1':
                return <IconDog />;
            case '2':
                return <IconCat />;
            case '4':
                return <IconRabbit />;
            case '10':
                return <IconBird />;
            case '11':
                return <IconGuineapig />;
            case '13':
                return <IconReptile />;
            default:
                return <Pets />;
        }
    }
    return <Pets />;
};
