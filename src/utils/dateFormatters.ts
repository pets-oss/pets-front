import { format } from 'date-fns';
import ltLocale from 'date-fns/locale/lt';

export const getYMDDateFromTS = (timestamp: string | null = ''): string => {
    if (timestamp) {
        const date: Date = new Date(parseInt(timestamp, 10));
        return format(date, 'yyyy-MM-dd', { locale: ltLocale });
    }

    return '';
};
