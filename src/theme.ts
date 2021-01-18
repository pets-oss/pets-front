import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme({
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
});
const { breakpoints } = defaultTheme;

const theme = {
    ...defaultTheme,
    overrides: {
        MuiTypography: {
            h1: {
                fontSize: '3rem',
                lineHeight: 1.2,
                [breakpoints.down('sm')]: {
                    fontSize: '2.6rem',
                },
            },
            h2: {
                fontSize: '2.6rem',
                lineHeight: 1.2,
                [breakpoints.down('sm')]: {
                    fontSize: '2.2rem',
                },
            },
            h3: {
                fontSize: '2.2rem',
                lineHeight: 1.2,
                [breakpoints.down('sm')]: {
                    fontSize: '1.8rem',
                },
            },
            h4: {
                fontSize: '1.8rem',
                lineHeight: 1.2,
                [breakpoints.down('sm')]: {
                    fontSize: '1.6rem',
                },
            },
            h5: {
                fontSize: '1.8rem',
                lineHeight: 1.2,
                [breakpoints.down('sm')]: {
                    fontSize: '1.6rem',
                },
            },
            h6: {
                fontSize: '1.6rem',
                lineHeight: 1.2,
                [breakpoints.down('sm')]: {
                    fontSize: '1.4rem',
                },
            },
        },
        MuiListItemIcon: {
            root: {
                minWidth: 'auto',
                marginTop: 4,
                marginBottom: 4,
            },
        },
    },
};

export default theme;
