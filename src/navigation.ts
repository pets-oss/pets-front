interface NavigationItem {
    authRequired: boolean;
    title: string;
    to: string;
    pageTitle: string;
}

const navigation: Array<NavigationItem> = [
    { authRequired: false, title: 'Home', to: '/', pageTitle: 'Welcome' },
    { authRequired: false, title: 'About', to: '/about', pageTitle: 'About this project' },
    { authRequired: true, title: 'Animals', to: '/animal-list', pageTitle: 'Animal list' },
    { authRequired: true, title: 'Favourites', to: '/favourites', pageTitle: 'Favourites' },
    { authRequired: true, title: 'Reports', to: '/reports', pageTitle: 'Reports' },
    { authRequired: true, title: 'Organization Tasks', to: '/organization-tasks', pageTitle: 'Organization Tasks' },
];

export { navigation };
export type { NavigationItem };
