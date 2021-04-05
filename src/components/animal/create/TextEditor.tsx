import MUIRichTextEditor from 'mui-rte';
import React, { useState } from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export default function TextEditor() {
    const onFocusParams = {
        lightBorder: '1px solid #c7c2be',
        darkBorder: '1px solid black',
        noBorder: '1px solid transparent',
        strongBorder: '0 0 0 1.5px #13493b',
        labelOnFocusTop: -5,
        labelOffFocusTop: 60,
        labelOnFocusFont: 0.9,
        labelOffFocusFont: 1.2,
        labelOnFocusZIndex: 1,
        labelOffFocusZIndex: -1,
    };

    const onFocusDefault = {
        boxShadow: onFocusParams.noBorder,
        border: onFocusParams.lightBorder,
        hoverBorder: onFocusParams.darkBorder,
        labelTop: onFocusParams.labelOffFocusTop,
        labelFont: onFocusParams.labelOffFocusFont,
        labelZIndex: onFocusParams.labelOffFocusZIndex,
    };

    const [onFocus, setOnFocus] = useState(onFocusDefault);

    const handleFocus = () => {
        setOnFocus({
            border: onFocusParams.noBorder,
            hoverBorder: '',
            boxShadow: onFocusParams.strongBorder,
            labelTop: onFocusParams.labelOnFocusTop,
            labelFont: onFocusParams.labelOnFocusFont,
            labelZIndex: onFocusParams.labelOnFocusZIndex,
        });
    };

    const handleBlur = () => {
        setOnFocus({
            boxShadow: onFocusParams.noBorder,
            border: onFocusParams.lightBorder,
            hoverBorder: onFocusParams.darkBorder,
            labelTop: onFocusParams.labelOnFocusTop,
            labelFont: onFocusParams.labelOnFocusFont,
            labelZIndex: onFocusParams.labelOnFocusZIndex,
        });
    };

    const handleSave = savedInput => {
        // eslint-disable-next-line no-console
        console.log(savedInput);
    };

    const defaultTheme = createMuiTheme();

    Object.assign(defaultTheme, {
        overrides: {
            MUIRichTextEditor: {
                root: {
                    borderRadius: 4,
                    boxShadow: `${onFocus.boxShadow}`,
                    border: `${onFocus.border}`,
                    '&:hover': {
                        border: `${onFocus.hoverBorder}`,
                    },
                    minHeight: 100,
                },
                editor: {
                    paddingLeft: 15,
                    marginTop: -5,
                },
            },
        },
    });

    const useStyles = makeStyles(() => ({
        label: {
            position: 'absolute',
            top: `${onFocus.labelTop}px`,
            left: 20,
            color: `#858585`,
            fontWeight: 400,
            userSelect: 'none',
            zIndex: onFocus.labelZIndex,
            background: '#fafafa',
            transition: 'all 0.2s',
            fontSize: `${onFocus.labelFont}em`,
            padding: '4px',
        },
        formHelperText: {
            position: 'relative',
            top: 5,
            left: 15,
            color: `#919191`,
            fontSize: `0.85em`,
            fontWeight: 400,
            transition: 'all 0.2s',
        },
    }));

    const classes = useStyles();

    return (
        <>
            <MuiThemeProvider theme={defaultTheme}>
                <MUIRichTextEditor
                    inlineToolbar
                    maxLength={200}
                    controls={['bold', 'italic', 'underline', 'strikethrough', 'highlight', 'clear', 'save']}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onSave={handleSave}
                />
            </MuiThemeProvider>
            <Typography className={classes.label}>Description</Typography>
            <Typography className={classes.formHelperText}>Optional</Typography>
        </>
    );
}
