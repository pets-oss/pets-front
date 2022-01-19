import { createTheme, ThemeOptions } from '@mui/material';

const defaultTheme = createTheme({
    palette: {
        primary: {
            light: '#417565',
            main: '#13493b',
            dark: '#002115',
        },
        secondary: {
            light: '#e8cdb8',
            main: '#875e3b',
            dark: '#4e2c1a',
        },
        tertiary: {
            light: '#ffffff',
            main: '#faf5f1',
            dark: '#c7c2be',
        },
        error: {
            main: '#f44336',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        body1: {
            lineHeight: 1.2,
        },
    },
});

// Responsive Typography
defaultTheme.typography.h1 = {
    fontSize: '2.25rem',
    [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.75rem',
    },
};

defaultTheme.typography.h2 = {
    fontSize: '1.75rem',
    [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
};
defaultTheme.typography.h3 = {
    fontSize: '1.5rem',
    [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
    },
};
defaultTheme.typography.h4 = {
    fontSize: '1.25rem',
    [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.15rem',
    },
};
defaultTheme.typography.h5 = {
    fontSize: '1.25rem',
    [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '1.15rem',
    },
};
defaultTheme.typography.h6 = {
    fontSize: '1.2rem',
};

const theme: ThemeOptions = {
    ...defaultTheme,

    components: {
        MuiLink: {
            defaultProps: {
                underline: 'hover',
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 'auto',
                    marginTop: 4,
                    marginBottom: 4,
                },
            },
        },
    },
};

declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary'];
    }
    interface PaletteOptions {
        tertiary: PaletteOptions['primary'];
    }
}

export default theme;
