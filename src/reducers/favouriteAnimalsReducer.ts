import { AddToFavouritesAction } from '../actions/addToFavourites';
import { RemoveFromFavouritesAction } from '../actions/removeFromFavourites';

export interface FavouriteAnimalsState {
    animals: number[];
}

const initialState = {
    animals: [],
};

type Action = AddToFavouritesAction | RemoveFromFavouritesAction;

export const favouriteAnimalsReducer = (state: FavouriteAnimalsState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES': {
            return { ...state, animals: [...state.animals, action.payload] };
        }
        case 'REMOVE_FROM_FAVOURITES': {
            return { ...state, animals: state.animals.filter(item => item !== action.payload) };
        }
        default: {
            return state;
        }
    }
};
