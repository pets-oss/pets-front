import React from 'react';

import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pets } from '@material-ui/icons';
import getGenderType, { GenderType } from '../../graphql/data-transform/genders';
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
    const styleMale = {
        color: '#3949ab',
        backgroundColor: '#c5cae9',
    };
    const styleDesexedMale = {
        color: 'white',
        backgroundColor: '#c5cae9',
    };
    const styleFemale = {
        color: '#d81b60',
        backgroundColor: '#f8bbd0',
    };
    const styleDesexedFemale = {
        color: 'white',
        backgroundColor: '#f8bbd0',
    };
    const styleUndefined = {
        color: '#999999',
        backgroundColor: '#e0e0e0',
    };

    switch (getGenderType(gender)) {
        case GenderType.MALE:
            return styleMale;
        case GenderType.DESEXEDMALE:
            return styleDesexedMale;
        case GenderType.FEMALE:
            return styleFemale;
        case GenderType.DESEXEDFEMALE:
            return styleDesexedFemale;
        default:
            return styleUndefined;
    }
};

const AnimalSpeciesIcon = (species?: Maybe<Species>) => {
    // available GraphQL enums
    //   {
    //     species(language:"lt") {
    //       id,
    //       value
    //     }
    //   }
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
