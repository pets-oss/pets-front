import React, { ReactElement } from 'react';

import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

interface HomePageCarouselContainerProps {
    itemsToRender: ReactElement[];
    title: string;
}

const PREFIX = 'HomePageCarouselContainer';

const classes = {
    root: `${PREFIX}-root`,
    title: `${PREFIX}-title`,
};

// const useStyles = makeStyles(() => ({
//     root: {
//         width: '100%',
//     },
//     title: {
//         fontWeight: 500,
//     },
// }));

export default function HomePageCarouselContainer({ itemsToRender, title }: HomePageCarouselContainerProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const renderItems = () => {
        if (isDesktop) {
            return [itemsToRender.slice(0, 3), itemsToRender.slice(3, 6)].map((carouselItem, index) => (
                <Grid container spacing={2} key={index}>
                    {carouselItem}
                </Grid>
            ));
        }
        return itemsToRender.map((carouselItem, index) => <div key={index}>{carouselItem}</div>);
    };
    return (
        <Box mt={5} className={classes.root}>
            <Typography noWrap variant="h4" color="textPrimary" gutterBottom className={classes.title}>
                {title}
            </Typography>
            {/*<Carouselousel autoPlay={false} indicators={false} animation="slide" swipe>*/}
            {renderItems()}
            {/*</Carouselousel>*/}
        </Box>
    );
}
