import React, { ReactChild, useState } from 'react';

interface OutdatedPageProps {
    animalsPage: boolean;
    favoritesPage: boolean;
}

export const OutdatedPageContext = React.createContext({
    isPageOutdated: { animalsPage: false, favoritesPage: false },
    // eslint-disable-next-line unused-imports/no-unused-vars-ts
    setIsPageOutdated: (isPageOutdated: OutdatedPageProps) => {
        // later used with useState
    },
});

export const OutdatedPageContextProvider = ({ children }: { children: ReactChild }) => {
    const [isPageOutdated, setIsPageOutdated] = useState({
        animalsPage: false,
        favoritesPage: false,
    });
    const value = { isPageOutdated, setIsPageOutdated };

    return <OutdatedPageContext.Provider value={value}>{children}</OutdatedPageContext.Provider>;
};
