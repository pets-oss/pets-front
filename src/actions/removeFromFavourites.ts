export type RemoveFromFavouritesAction = { type: 'REMOVE_FROM_FAVOURITES'; payload: number };

const removeFromFavourites = (id: number): RemoveFromFavouritesAction => ({
    type: 'REMOVE_FROM_FAVOURITES',
    payload: id,
});

export default removeFromFavourites;
