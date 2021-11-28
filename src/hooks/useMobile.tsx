import { useMediaQuery, useTheme } from '@mui/material';

export default function useMobile() {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('sm'));
}
