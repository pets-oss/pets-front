import { useMediaQuery, useTheme } from '@mui/material';

export default function useNavMobile() {
    const theme = useTheme();
    // NOTE value is set by the visual menu size
    return useMediaQuery(theme.breakpoints.down(768));
}
