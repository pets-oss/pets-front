import { Gender, Maybe } from '../types';

export enum GenderType {
    MALE,
    FEMALE,
    UNDEFINED = 'Undefined',
}

const GenderMapList: {
    [key: string]: GenderType;
} = {
    '1': GenderType.MALE,
    '2': GenderType.FEMALE,
};

export default function getGenderType(gender?: Maybe<Gender>): GenderType {
    if (!gender) {
        return GenderType.UNDEFINED;
    }

    if (gender.id in GenderMapList) {
        return GenderMapList[gender.id];
    }

    return GenderType.UNDEFINED;
}
