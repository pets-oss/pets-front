import React, { ReactElement } from 'react';
import Carousel from 'react-material-ui-carousel';

import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface HomePageCarouselContainerProps {
    itemsToRender: ReactElement[];
    title: string;
}

export default function HomePageCarouselContainer({ itemsToRender, title }: HomePageCarouselContainerProps) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const classes = useStyles();

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
            <Carousel autoPlay={false} indicators={false} animation="slide" swipe>
                {renderItems()}
            </Carousel>
        </Box>
    );
}
const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
    title: {
        fontWeight: 500,
    },
}));
