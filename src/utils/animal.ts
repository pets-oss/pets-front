import { formatDistance } from 'date-fns';
import ltLocale from 'date-fns/locale/lt';

import { capitalizeFirstLetter } from './string';

export const getAnimalAge = (birthTimestamp: string | null = ''): string => {
    if (birthTimestamp) {
        const distance = formatDistance(Number(birthTimestamp), new Date(), { locale: ltLocale });
        return capitalizeFirstLetter(distance);
    }

    return '';
};

export const getAnimalWeight = (weight: number): string => (weight ? `${weight}kg` : '');
