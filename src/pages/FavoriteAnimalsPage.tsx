import React from 'react';

import AnimalsPage from './AnimalsPage';

function FavoriteAnimalsPage() {
    return (
        <>
            <AnimalsPage title="Favorite Animals" showFavoriteAnimalsOnly />
        </>
    );
}

export default FavoriteAnimalsPage;
