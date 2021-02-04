import { formatDistance } from 'date-fns';
import ltLocale from 'date-fns/locale/lt';

import { capitalizeFirstLetter } from './string';

export const getAnimalAge = (birthTimestamp: string): string =>
    capitalizeFirstLetter(formatDistance(Number(birthTimestamp), new Date(), { locale: ltLocale }));

export const getAnimalWeight = (weight: number): string => (weight ? `${weight}kg` : '');
