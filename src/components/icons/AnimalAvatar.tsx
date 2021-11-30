import React from 'react';

import { Pets } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import getSpecieType, { SpeciesType } from '../../graphql/data-transform/species';
import { AnimalDetails, Maybe, Species } from '../../graphql/types';
import IconBird from './IconBird';
import IconCat from './IconCat';
import IconDog from './IconDog';
import IconGuineapig from './IconGuineapig';
import IconRabbit from './IconRabbit';
import IconReptile from './IconReptile';

type AnimalAvatarProps = Pick<AnimalDetails, 'species' | 'gender'>;

const PREFIX = 'AnimalAvatar';
const classes = {
    dynamicAvatar: `${PREFIX}-dynamicAvatar`,
};

export default function AnimalAvatar({ species }: AnimalAvatarProps) {
    // const styleProps = createGenderStyle(gender);
    // const classes = useStyles(styleProps);

    return (
        <Avatar className={classes.dynamicAvatar} aria-label="species and gender icon">
            {AnimalSpeciesIcon(species)}
        </Avatar>
    );
}
//
// interface AvatarStyleProps {
//     color: string;
//     backgroundColor: string;
// }

// const useStyles = makeStyles({
//     dynamicAvatar: (props: AvatarStyleProps) => ({
//         color: props.color,
//         backgroundColor: props.backgroundColor,
//     }),
// });

// const createGenderStyle = (gender?: Maybe<Gender>): AvatarStyleProps => {
//     const styleMale = {
//         color: '#3949ab',
//         backgroundColor: '#c5cae9',
//     };
//     const styleDesexedMale = {
//         color: 'white',
//         backgroundColor: '#c5cae9',
//     };
//     const styleFemale = {
//         color: '#d81b60',
//         backgroundColor: '#f8bbd0',
//     };
//     const styleDesexedFemale = {
//         color: 'white',
//         backgroundColor: '#f8bbd0',
//     };
//     const styleUndefined = {
//         color: '#999999',
//         backgroundColor: '#e0e0e0',
//     };
//
//     switch (getGenderType(gender)) {
//         case GenderType.MALE:
//             return styleMale;
//         case GenderType.DESEXEDMALE:
//             return styleDesexedMale;
//         case GenderType.FEMALE:
//             return styleFemale;
//         case GenderType.DESEXEDFEMALE:
//             return styleDesexedFemale;
//         default:
//             return styleUndefined;
//     }
// };

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
