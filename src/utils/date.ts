import { format as formatFn } from 'date-fns';
import ltLocale from 'date-fns/locale/lt';

export const getFormattedDate = (timestampString: string, format = 'yyyy-MM-dd'): string => {
    const timestamp = Number.parseInt(timestampString, 10);

    if (Number.isNaN(timestamp)) {
        return '';
    }

    return formatFn(timestamp, format, { locale: ltLocale });
};
