import { Animal } from '../graphql/types';

export const getAnimalParameters = (animal: Animal) => {
    const { details: animalDetails } = animal;
    return (
        animalDetails &&
        Object.keys(animalDetails)
            .filter(key => {
                return typeof animalDetails[key] === 'object' && animalDetails[key] !== null;
            })
            .map(key => {
                return { title: animalDetails[key].__typename, value: animalDetails[key].value };
            })
    );
};
