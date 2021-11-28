import { ContentState, convertFromHTML, convertToRaw, Editor, EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { FormHelperText } from '@mui/material';

export default function RichTextEditor({ name, maxLength }: RichTextEditorProps) {
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

    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

    const editor = React.useRef(null);

    return (
        <>
            <Editor
                ref={editor}
                editorState={editorState}
                onChange={setEditorState}
                placeholder="Type here your description"
            />
            <FormHelperText id="component-helper-text">Optional</FormHelperText>
        </>
    );
}

// const defaultTheme = createTheme();
// Object.assign(defaultTheme, {
//     overrides: {
//         MUIRichTextEditor: {
//             root: {
//                 width: '100%',
//                 border: '1px #c7c2be solid',
//                 '&:hover': {
//                     border: `1px solid #202020`,
//                 },
//                 borderRadius: '4px',
//                 padding: '0 14px',
//                 position: 'relative',
//             },
//             editor: {
//                 height: '150px',
//                 wordBreak: 'break-word',
//             },
//         },
//     },
// });
//
// const focusedTheme = createTheme();
// Object.assign(focusedTheme, {
//     overrides: {
//         MUIRichTextEditor: {
//             root: {
//                 width: '100%',
//                 border: '2px solid #13493B',
//                 borderRadius: '4px',
//                 padding: '0 14px',
//                 position: 'relative',
//             },
//             editor: {
//                 height: '150px',
//                 wordBreak: 'break-word',
//             },
//         },
//     },
// });
//
// const useStyles = makeStyles((theme: Theme) => ({
//     formHelperText: {
//         position: 'relative',
//         top: 5,
//         left: 15,
//         color: theme.palette.text.secondary,
//         fontSize: `0.85em`,
//         fontWeight: 400,
//         transition: 'all 0.2s',
//     },
// }));

interface RichTextEditorProps {
    name: string;
    maxLength: number;
}
