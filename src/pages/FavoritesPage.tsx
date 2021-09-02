import React, { useState } from 'react';

import { Fade } from '@material-ui/core';
import AnimalsListContainer from '../components/animal/AnimalsListContainer';
import { AnimalsViewType } from '../components/animal/ViewSelector';
import Page from './Page';

function FavoritesPage() {
    const [animalsCount, setAnimalsCount] = useState(0);
    const viewType = AnimalsViewType.LIST;

    const handleAnimalsCountChange = (value: number) => {
        setAnimalsCount(value);
    };

    return (
        <Fade in timeout={600}>
            <Page title="Favorites" topSection={<TopSection favoriteAnimalsCount={animalsCount} />}>
                <AnimalsListContainer viewType={viewType} setAnimalsCount={handleAnimalsCountChange} />
            </Page>
        </Fade>
    );
}

function TopSection({ favoriteAnimalsCount }) {
    return <div>Total: {favoriteAnimalsCount}</div>;
}

export default FavoritesPage;
