import { ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import MUIRichTextEditor from 'mui-rte';
import React, { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { FormHelperText, makeStyles } from '@material-ui/core';
import { createTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';

export default function RichTextEditor({ name, maxLength }: RichTextEditorProps) {
    const classes = useStyles();
    const [focused, setFocused] = useState(false);

    const { register, control, setValue } = useFormContext();
    const [defaultValue, setDefaultValue] = useState('');

    const fieldValue = useWatch({
        control,
        name: name,
    });

    useEffect(() => {
        register(name);
        setDefaultValue(() => {
            const markup = typeof fieldValue === 'string' ? fieldValue : '';
            const contentHTML = convertFromHTML(markup);
            const contentState = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap);
            return JSON.stringify(convertToRaw(contentState));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [register, name]);

    const onChange = content => {
        setValue(name, content);
    };

    return (
        <>
            <MuiThemeProvider theme={focused ? focusedTheme : defaultTheme}>
                <MUIRichTextEditor
                    defaultValue={defaultValue}
                    onChange={state => onChange(stateToHTML(state.getCurrentContent()))}
                    label="Type here your description"
                    inlineToolbar
                    maxLength={maxLength}
                    controls={['bold', 'italic', 'underline', 'strikethrough', 'highlight', 'clear']}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </MuiThemeProvider>
            <FormHelperText className={classes.formHelperText} id="component-helper-text">
                Optional
            </FormHelperText>
        </>
    );
}

const defaultTheme = createTheme();
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
                wordBreak: 'break-word',
            },
        },
    },
});

const focusedTheme = createTheme();
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
                wordBreak: 'break-word',
            },
        },
    },
});

const useStyles = makeStyles((theme: Theme) => ({
    formHelperText: {
        position: 'relative',
        top: 5,
        left: 15,
        color: theme.palette.text.secondary,
        fontSize: `0.85em`,
        fontWeight: 400,
        transition: 'all 0.2s',
    },
}));

interface RichTextEditorProps {
    name: string;
    maxLength: number;
}
