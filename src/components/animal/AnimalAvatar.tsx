import React from 'react';

import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pets } from '@material-ui/icons';
import getGenderType, { GenderType } from '../../graphql/data-transform/gender';
import getSpecieType, { SpeciesType } from '../../graphql/data-transform/species';
import { AnimalDetails, Gender, Maybe, Species } from '../../graphql/types';
import IconBird from './IconBird';
import IconCat from './IconCat';
import IconDog from './IconDog';
import IconGuineapig from './IconGuineapig';
import IconRabbit from './IconRabbit';
import IconReptile from './IconReptile';

type AnimalAvatarProps = Pick<AnimalDetails, 'species' | 'gender'>;

export default function AnimalAvatar({ species, gender }: AnimalAvatarProps) {
    const styleProps = createGenderStyle(gender);
    const classes = useStyles(styleProps);

    return (
        <Avatar className={classes.dynamicAvatar} aria-label="species and gender icon">
            {AnimalSpeciesIcon(species)}
        </Avatar>
    );
}

interface AvatarStyleProps {
    color: string;
    backgroundColor: string;
}

const useStyles = makeStyles({
    dynamicAvatar: (props: AvatarStyleProps) => ({
        color: props.color,
        backgroundColor: props.backgroundColor,
    }),
});

const createGenderStyle = (gender?: Maybe<Gender>): AvatarStyleProps => {
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

    switch (getGenderType(gender)) {
        case GenderType.MALE:
            return gender1;
        case GenderType.FEMALE:
            return gender2;
        default:
            return genderUndefined;
    }
};

const AnimalSpeciesIcon = (species?: Maybe<Species>) => {
    switch (getSpecieType(species)) {
        case SpeciesType.DOG:
            return <IconDog />;
        case SpeciesType.CAT:
            return <IconCat />;
        case SpeciesType.RABBIT:
            return <IconRabbit />;
        case SpeciesType.BIRD:
            return <IconBird />;
        case SpeciesType.GUINEAPIG:
            return <IconGuineapig />;
        case SpeciesType.REPTILE:
            return <IconReptile />;
        default:
            return <Pets />;
    }
};
