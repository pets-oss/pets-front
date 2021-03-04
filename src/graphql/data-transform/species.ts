import { Species } from '../types';

export const enum SpeciesType {
    DOG = 'dog',
    CAT = 'cat',
    UNDEFINED = 'Undefined',
}

const SpeciesMapList: {
    [key: string]: SpeciesType;
} = {
    '1': SpeciesType.DOG,
    '2': SpeciesType.CAT,
};

export default function getSpecieType(species?: Species): SpeciesType {
    if (!species) {
        return SpeciesType.UNDEFINED;
    }

    if (species.id in SpeciesMapList) {
        return SpeciesMapList[species.id];
    }

    return SpeciesType.UNDEFINED;
}
