import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import Skeleton from '@material-ui/lab/Skeleton';

function FavouritesListContainer() {
    const { page, isLoading, error } = useSelector((state: RootStateOrAny) => state.animalsFav.all);

    if (isLoading) {
        return <Skeleton animation="wave" variant="rect" height={500} width="100%" />;
    }

    if (error) {
        // TODO: replace with proper UI elements
        console.warn(error);
        return <p>Error!</p>;
    }

    let info;

    if (page.ids) {
        info = `with ${page.ids.length} favourite animals`;
    }

    return <div>FavouritesListContainer {info}</div>;
}

export default FavouritesListContainer;
