import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#e8cdb8',
            main: '#875e3b',
            dark: '#4e2c1a',
        },
        secondary: {
            light: '#417565',
            main: '#13493b',
            dark: '#002115',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 450,
            md: 768,
            lg: 1280,
            xl: 1920,
        },
    },
});
const { breakpoints } = defaultTheme;

const theme: ThemeOptions = {
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
                    fontSize: '1.4rem',
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
        MuiStepIcon: {
            root: {
                '&$completed': {
                    fill: defaultTheme.palette.success.main,
                },
                '&$active': {
                    fill: defaultTheme.palette.secondary.main,
                },
            },
        },
    },
    props: {
        MuiUseMediaQuery: {
            noSsr: true,
        },
    },
};

export default theme;
