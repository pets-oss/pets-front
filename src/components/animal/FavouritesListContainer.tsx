import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import Skeleton from '@material-ui/lab/Skeleton';

function FavouritesListContainer() {
    const { ids, isLoading, error } = useSelector((state: RootStateOrAny) => state.favourites);

    if (isLoading) {
        return <Skeleton animation="wave" variant="rect" height={500} width="100%" />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        console.warn(error);
        return <p>Error!</p>;
    }

    let info;

    if (ids) {
        info = `with ${ids.length} favourite animals`;
        console.log('FavouritesListContainer', ids);
    }

    return <div>FavouritesListContainer {info}</div>;
}

export default FavouritesListContainer;
