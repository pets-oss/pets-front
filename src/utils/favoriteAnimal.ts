const FAVORITE_ANIMAL_IDS = 'favoriteAnimalIds';

export const getFavoriteAnimalIds = () => {
    return JSON.parse(localStorage.getItem(FAVORITE_ANIMAL_IDS) || '');
};

export const setFavoriteAnimalIds = (favoriteAnimalIds?: number[]) => {
    localStorage.setItem(FAVORITE_ANIMAL_IDS, JSON.stringify(favoriteAnimalIds));
};

export const isAnimalFavorite = (animalId: number) => {
    const favoriteAnimalIds = getFavoriteAnimalIds();
    if (favoriteAnimalIds && favoriteAnimalIds.includes(animalId)) {
        return true;
    }
    return false;
};
