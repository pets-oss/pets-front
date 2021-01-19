import { formatDistance } from 'date-fns';

import { capitalizeFirstLetter } from './string';

export const getAnimalAge = (birthTimestamp: number): string =>
    capitalizeFirstLetter(formatDistance(birthTimestamp, new Date()));
