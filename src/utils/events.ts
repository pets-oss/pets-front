import { Event } from '../graphql/types';

export const sortEventsByDate = (event1: Event, event2: Event, descending = true) => {
    if (!event1 || !event2) {
        return 0;
    }

    const date1 = parseInt(event1.dateTime as string, 10);
    const date2 = parseInt(event2.dateTime as string, 10);

    return descending ? date2 - date1 : date1 - date2;
};
