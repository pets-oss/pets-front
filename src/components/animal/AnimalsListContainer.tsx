import React from 'react';

import { Animal } from '../../graphql/types';
import AnimalsList from './AnimalsList';
import AnimalsTable from './AnimalsTable';
import { AnimalsViewType } from './ViewSelector';

interface AnimalsListContainerProps {
    viewType: AnimalsViewType;
    animals: Animal[] | undefined;
}

export default function AnimalsListContainer({ animals, viewType }: AnimalsListContainerProps) {
    if (!animals?.length) {
        // TODO: replace with proper UI elements
        return <p>No data</p>;
    }

    if (viewType === AnimalsViewType.TABLE) {
        return <AnimalsTable animals={animals} />;
    }

    return <AnimalsList animals={animals} />;
}
