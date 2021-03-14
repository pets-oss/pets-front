import { Gender, Maybe } from '../types';

// available GraphQL enums
//  {
//     genders(language:"lt") {
//       id,
//       value
//     }
//   }

export enum GenderType {
    FEMALE,
    MALE,
    DESEXEDFEMALE,
    DESEXEDMALE,
    UNDEFINED = 'Undefined',
}

const GenderMapList: {
    [key: string]: GenderType;
} = {
    '1': GenderType.FEMALE,
    '2': GenderType.MALE,
    '3': GenderType.DESEXEDFEMALE,
    '4': GenderType.DESEXEDMALE,
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
