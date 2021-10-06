import { format, getTime, isValid, parse } from 'date-fns';
import ltLocale from 'date-fns/locale/lt';

export const getYMDDateFromTS = (timestamp: string | null = ''): string => {
    if (timestamp) {
        const date: Date = new Date(parseInt(timestamp, 10));
        return format(date, 'yyyy-MM-dd', { locale: ltLocale });
    }

    return '';
};

export const getTSDateFromYMD = (datestr: string | null = ''): string => {
    if (datestr) {
        const result = parse(datestr, 'yyyy-MM-dd', new Date());
        return isValid(result) ? getTime(result).toString() : '';
    }

    return '';
};

export const getTSDateFromYMDFlexible = (datestr: string | null = ''): string => {
    if (datestr) {
        const result = getDateYMDFlexible(datestr);
        if (result === false) {
            return '';
        }
        // incoming datestr is still a string, but adjusted/transformed to a valid date
        const dateResult = Date.parse(datestr);
        return getTime(dateResult).toString();
    }

    return '';
};

export const getDateYMDFlexible = (datestr: string | null = ''): string | boolean => {
    if (datestr) {
        let result = parse(datestr, 'yyyy-MM-dd', new Date());
        if (isValid(result)) {
            return format(result, 'yyyy-MM-dd');
        }
        result = parse(datestr, 'yyyy-MM', new Date());
        if (isValid(result)) {
            return format(result, 'yyyy-MM-dd');
        }
        result = parse(datestr, 'yyyy', new Date());
        if (isValid(result)) {
            return format(result, 'yyyy-MM-dd');
        }
    }
    return false;
};
