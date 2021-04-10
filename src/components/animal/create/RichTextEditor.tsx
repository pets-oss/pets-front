import MUIRichTextEditor from 'mui-rte';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

import { FormHelperText, makeStyles } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export default function RichTextEditor({ name }: RichTextEditorProps) {
    const [focused, setFocused] = useState(false);

    const classes = useStyles();
    return (
        <>
            <Controller
                name={name}
                render={props => (
                    <MuiThemeProvider theme={focused ? focusedTheme : defaultTheme}>
                        <MUIRichTextEditor
                            onSave={data => props.onChange(data)}
                            defaultValue={props.value}
                            label="Type here your description"
                            inlineToolbar
                            maxLength={400}
                            controls={['bold', 'italic', 'underline', 'strikethrough', 'highlight', 'clear', 'save']}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                        />
                    </MuiThemeProvider>
                )}
            />
            <FormHelperText className={classes.formHelperText} id="component-helper-text">
                Optional
            </FormHelperText>
        </>
    );
}

const defaultTheme = createMuiTheme();
Object.assign(defaultTheme, {
    overrides: {
        MUIRichTextEditor: {
            root: {
                width: '100%',
                border: '1px #c7c2be solid',
                '&:hover': {
                    border: `1px solid #202020`,
                },
                borderRadius: '4px',
                padding: '0 14px',
                position: 'relative',
            },
            editor: {
                height: '150px',
                wordBreak: 'break-all',
            },
        },
    },
});

const focusedTheme = createMuiTheme();
Object.assign(focusedTheme, {
    overrides: {
        MUIRichTextEditor: {
            root: {
                width: '100%',
                border: '2px solid #13493B',
                borderRadius: '4px',
                padding: '0 14px',
                position: 'relative',
            },
            editor: {
                height: '150px',
                wordBreak: 'break-all',
            },
        },
    },
});

const useStyles = makeStyles(() => ({
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

interface RichTextEditorProps {
    name: string;
}
