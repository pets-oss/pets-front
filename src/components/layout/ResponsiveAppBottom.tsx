import React from 'react';

import useNavMobile from '../../hooks/useNavMobile';
import AppBottomNavigation from './AppBottomNavigation';

export default function ResponsiveAppBottom() {
    const matchesNavMobile = useNavMobile();
    return matchesNavMobile ? <AppBottomNavigation /> : <div />;
}
