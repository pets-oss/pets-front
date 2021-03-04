import { Species } from '../types';

export const enum SpeciesType {
    DOG = '1',
    CAT = '2',
    UNDEFINED = 'Undefined',
}

export default function getSpecieType(species?: Species): SpeciesType {
    if (!species) {
        return SpeciesType.UNDEFINED;
    }
    // if (species.id in SpeciesType) {
    //     // return
    // }

    return SpeciesType.UNDEFINED;
}
