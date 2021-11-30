import { useMediaQuery, useTheme } from '@mui/material';

export default function useMobileXS() {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('xs'));
}
