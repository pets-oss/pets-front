import { Animal, Event } from '../graphql/types';
import { getAnimalAge, getAnimalWeight } from './animal';

export const getAnimalDetails = (animal: Animal) => {
    const { details: animalDetails } = animal;

    const birthDay = {
        title: 'Birthday',
        value: animalDetails?.birthDate ? getAnimalAge(animalDetails.birthDate) : '',
    };

    const weight = {
        title: 'Weight',
        value: animalDetails?.weight ? getAnimalWeight(animalDetails.weight) : '',
    };

    const otherDetails = animalDetails
        ? Object.keys(animalDetails)
              .filter(key => {
                  return typeof animalDetails[key] === 'object' && animalDetails[key] !== null;
              })
              .map(key => {
                  return { title: animalDetails[key].__typename, value: animalDetails[key].value };
              })
        : [];

    return [birthDay, ...otherDetails, weight];
};

export const getCardDetails = (event: Event) => [
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
