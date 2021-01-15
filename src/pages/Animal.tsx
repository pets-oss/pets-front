import React from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '@material-ui/core';

interface RouterParams {
    id: string;
}

function Animal() {
    const params: RouterParams = useParams();
    const { id } = params;

    return (
        <div className="Animal-page">
            <Typography variant="h3" component="h1">
                Animal page
            </Typography>
            <Typography variant="body1">Referencing Animal ID:{id}</Typography>
        </div>
    );
}

export default Animal;
