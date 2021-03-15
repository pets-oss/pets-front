import React from 'react';

import useMobile from '../../hooks/useMobile';
import AppTopBar from './AppTopBar';
import AppTopNavigation from './AppTopNavigation';

export default function ResponsiveAppTop() {
    const matchesMobile = useMobile();
    return matchesMobile ? <AppTopBar /> : <AppTopNavigation />;
}
