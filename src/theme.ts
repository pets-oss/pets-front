import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffd6c9',
            main: '#d1a598',
            dark: '#9f766a',
        },
        secondary: {
            light: '#417565',
            main: '#13493b',
            dark: '#002115',
        },
    },
    overrides: {
        MuiListItemIcon: {
            root: {
                minWidth: 'auto',
                marginTop: 4,
                marginBottom: 4,
            },
        },
    },
});

export default theme;
