import { Event } from '../graphql/types';

export const getEventDetails = (event: Event) => [
    {
        title: 'Expenses',
        value: event.expenses || '-',
    },
    {
        title: 'Comments',
        value: event.comments || '-',
    },
    {
        title: 'Author',
        value: '-',
    },
];
