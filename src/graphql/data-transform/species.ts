import { Maybe, Species } from '../types';

// available GraphQL enums
//   {
//     species(language:"lt") {
//       id,
//       value
//     }
//   }

export enum SpeciesType {
    DOG,
    CAT,
    RABBIT,
    BIRD,
    GUINEAPIG,
    REPTILE,
    UNDEFINED = 'undefined',
}

const SpeciesMapList: {
    [key: string]: SpeciesType;
} = {
    '1': SpeciesType.DOG,
    '2': SpeciesType.CAT,
    '4': SpeciesType.RABBIT,
    '10': SpeciesType.BIRD,
    '11': SpeciesType.GUINEAPIG,
    '13': SpeciesType.REPTILE,
};

export default function getSpecieType(species?: Maybe<Species>): SpeciesType {
    if (!species) {
        return SpeciesType.UNDEFINED;
    }

    if (species.id in SpeciesMapList) {
        return SpeciesMapList[species.id];
    }

    return SpeciesType.UNDEFINED;
}
