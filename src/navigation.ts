const navigation = [
    { authRequired: false, title: 'Home', to: '/' },
    { authRequired: false, title: 'About', to: '/about' },
    { authRequired: true, title: 'Animals', to: '/animal-list' },
    { authRequired: true, title: 'Favourites', to: '/favourites' },
    { authRequired: true, title: 'Reports', to: '/reports' },
];

export default navigation;
