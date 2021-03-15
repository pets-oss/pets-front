import { useMediaQuery } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';

export default function useMobileXS() {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('xs'));
}
