import { formatDistance } from 'date-fns';
import ltLocale from 'date-fns/locale/lt';

import { Animal } from '../graphql/types';
import { capitalizeFirstLetter } from './string';

export const getAnimalAge = (birthTimestamp: string | null = ''): string => {
    if (birthTimestamp) {
        const distance = formatDistance(Number(birthTimestamp), new Date(), { locale: ltLocale });
        return capitalizeFirstLetter(distance);
    }

    return '';
};

export const getAnimalWeight = (weight: number): string => (weight ? `${weight}kg` : '');

export const sortAnimalsByDate = (animal1: Animal, animal2: Animal, descending = true) => {
    if (!animal1 || !animal2) {
        return 0;
    }

    const date1 = parseInt(animal1.modTime as string, 10);
    const date2 = parseInt(animal2.modTime as string, 10);

    return descending ? date2 - date1 : date1 - date2;
};
