import React from 'react';

import useNavMobile from '../../hooks/useNavMobile';
import AppTopBar from './AppTopBar';
import AppTopNavigation from './AppTopNavigation';

export default function ResponsiveAppTop() {
    const matchesNavMobile = useNavMobile();
    return matchesNavMobile ? <AppTopBar /> : <AppTopNavigation />;
}
