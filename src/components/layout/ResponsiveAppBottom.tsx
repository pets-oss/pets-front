import React from 'react';

import useMobile from '../../hooks/useMobile';
import AppBottomNavigation from './AppBottomNavigation';

export default function ResponsiveAppBottom() {
    const matchesMobile = useMobile();
    return matchesMobile ? <AppBottomNavigation /> : <div />;
}
