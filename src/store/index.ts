import { createStore } from 'redux';

import { favouriteAnimalsReducer } from '../reducers/favouriteAnimalsReducer';

const store = createStore(favouriteAnimalsReducer);

export default store;
