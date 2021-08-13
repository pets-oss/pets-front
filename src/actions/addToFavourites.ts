export type AddToFavouritesAction = { type: 'ADD_TO_FAVOURITES'; payload: number };

const addToFavourites = (id: number): AddToFavouritesAction => ({
    type: 'ADD_TO_FAVOURITES',
    payload: id,
});

export default addToFavourites;
