import 'draft-js/dist/Draft.css';
import {
    ContentState,
    convertFromHTML,
    convertToRaw,
    Editor,
    EditorState,
    getDefaultKeyBinding,
    KeyBindingUtil,
    RichUtils,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { Box, Divider, FormHelperText, ToggleButton, ToggleButtonGroup, Toolbar } from '@mui/material';

const { hasCommandModifier } = KeyBindingUtil;

// const styles = ['BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH', 'CODE'];
// const removeInlineStyles = editorState => {
//     const contentState = editorState.getCurrentContent();
//     const contentWithoutStyles = styles.reduce(
//         (acc, style) => Modifier.removeInlineStyle(acc, editorState.getSelection(), style),
//         contentState
//     );
//     return EditorState.push(editorState, contentWithoutStyles, 'change-inline-style');
// };
//
// const removeEntities = editorState => {
//     const contentState = editorState.getCurrentContent();
//     const contentWithoutEntities = Modifier.applyEntity(contentState, editorState.getSelection(), null);
//     return EditorState.push(editorState, contentWithoutEntities, 'apply-entity');
// };
//
// const removeLists = editorState => {
//     const contentState = editorState.getCurrentContent();
//     let contentWithoutLists = contentState;
//     const newEditorState = editorState;
//     const blocksMap = contentState.getBlockMap();
//
//     blocksMap.forEach(block => {
//         const blockType = block.getType();
//         if (blockType === 'ordered-list-item' || blockType === 'unordered-list-item') {
//             const selectionState = SelectionState.createEmpty(block.getKey());
//             const updatedSelection = selectionState.merge({
//                 focusOffset: 0,
//                 anchorOffset: block.getText().length,
//             });
//
//             contentWithoutLists = Modifier.setBlockType(contentWithoutLists, updatedSelection, 'unstyled');
//         }
//     });
//
//     return EditorState.push(newEditorState, contentWithoutLists, 'change-block-type');
// };

export default function RichTextEditor({ name }: RichTextEditorProps) {
    const { register, control, setValue } = useFormContext();
    const fieldValue = useWatch({
        control,
        name: name,
    });

    useEffect(() => {
        register(name);
        const markup = typeof fieldValue === 'string' ? fieldValue : '';
        const contentHTML = convertFromHTML(markup);
        const contentState = ContentState.createFromBlockArray(contentHTML.contentBlocks, contentHTML.entityMap);
        setEditorState(EditorState.createWithContent(contentState));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [register, name]);

    const onChange = content => {
        const rawContentState = convertToRaw(content.getCurrentContent());

        const markup = draftToHtml(rawContentState);
        setValue(name, markup);

        // console.log('onChange', markup, rawContentState);
        // console.log(,convertToRaw(content));
        setEditorState(content);
    };

    // const blocksFromHTML = convertFromHTML(typeof fieldValue === 'string' ? fieldValue : '');
    // const state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);

    // const [editorState, setEditorState] = React.useState(() => EditorState.createWithContent(state));
    const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());
    const editor = React.useRef(null);

    const toggleBlockType = blockType => {
        onChange(RichUtils.toggleBlockType(editorState, blockType));
    };

    const toggleInlineStyle = inlineStyle => {
        onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };

    const myKeyBindingFn = (e): string | null => {
        if (e.keyCode === 9 /* `TAB` key */ && hasCommandModifier(e)) {
            return 'myeditor-tab';
        }
        return getDefaultKeyBinding(e);
    };

    const handleKeyCommand = (command, es) => {
        if (command === 'myeditor-tab') {
            return 'handled';
        }

        const newState = RichUtils.handleKeyCommand(es, command);
        if (newState) {
            onChange(newState);
            return 'handled';
        }

        return 'not-handled';
    };
    // const handleClearClick = e => {
    //     e.stopPropagation();
    //
    //     const newEditorState = [removeEntities, removeInlineStyles, removeLists].reduce(
    //         (accumulator, currentValue) => currentValue(accumulator),
    //         editorState
    //     );
    //
    //     onChange(newEditorState);
    // };

    return (
        <Box border={1} borderColor="grey.500" borderRadius={2}>
            <Toolbar>
                <BlockStyleControls editorState={editorState} onToggle={toggleBlockType} />
                <Divider variant="middle" />
                <InlineStyleControls editorState={editorState} onToggle={toggleInlineStyle} />
                {/*<ToggleButton value={'clear'} onMouseDown={e => handleClearClick(e)}>*/}
                {/*    clear*/}
                {/*</ToggleButton>*/}
            </Toolbar>
            <Box pl={1} m={2}>
                <Editor
                    stripPastedStyles={true}
                    ref={editor}
                    customStyleMap={styleMap}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    onChange={onChange}
                    keyBindingFn={myKeyBindingFn}
                    spellCheck={true}
                    placeholder="Type here your description"
                />
                <FormHelperText id="component-helper-text">Optional</FormHelperText>
            </Box>
        </Box>
    );
}

const BLOCK_TYPES = [
    // { label: 'H1', style: 'header-one', icon: <LooksOneIcon /> },
    // { label: 'H2', style: 'header-two', icon: <LooksTwoIcon /> },
    // { label: 'H3', style: 'header-three', icon: <Looks3Icon /> },
    // { label: 'H4', style: 'header-four', icon: <Looks4Icon /> },
    // { label: 'H5', style: 'header-five', icon: <Looks5Icon /> },
    // { label: 'H6', style: 'header-six', icon: <Looks6Icon /> },
    // { label: 'Blockquote', style: 'blockquote', icon: <FormatQuoteIcon /> },
    { label: 'UL', style: 'unordered-list-item', icon: <FormatListBulletedIcon /> },
    { label: 'OL', style: 'ordered-list-item', icon: <FormatListNumberedIcon /> },
];

const BlockStyleControls = props => {
    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

    const handleMouseDown = (e, style) => {
        e.preventDefault();
        props.onToggle(style);
    };

    return (
        <div className="RichEditor-controls">
            <ToggleButtonGroup value={blockType} exclusive>
                {BLOCK_TYPES.map(type => (
                    <ToggleButton key={type.label} value={type.style} onMouseDown={e => handleMouseDown(e, type.style)}>
                        {type.icon}
                    </ToggleButton>
                    // <StyleButton
                    //     key={type.label}
                    //     active={type.style === blockType}
                    //     label={type.label}
                    //     onToggle={props.onToggle}
                    //     style={type.style}
                    //     icon={type.icon}
                    // />
                ))}
            </ToggleButtonGroup>
        </div>
    );
};

// Custom overrides for "code" style.
const styleMap = {
    // CODE: {
    //     backgroundColor: 'rgba(0, 0, 0, 0.05)',
    //     fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    //     fontSize: 16,
    //     padding: 2,
    // },
};

const INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD', icon: <FormatBoldIcon /> },
    { label: 'Italic', style: 'ITALIC', icon: <FormatItalicIcon /> },
    { label: 'Underline', style: 'UNDERLINE', icon: <FormatUnderlinedIcon /> },
    // { label: 'Strikethrough', style: 'STRIKETHROUGH', icon: <StrikethroughSIcon /> },
    // { label: 'Monospace', style: 'CODE', icon: <CodeIcon /> },
];

const InlineStyleControls = props => {
    const currentStyle = props.editorState.getCurrentInlineStyle();

    const handleMouseDown = (e, style) => {
        e.preventDefault();
        props.onToggle(style);
    };

    return (
        <ToggleButtonGroup value={[...currentStyle]}>
            {INLINE_STYLES.map(type => (
                <ToggleButton key={type.label} value={type.style} onMouseDown={e => handleMouseDown(e, type.style)}>
                    {type.icon}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

interface RichTextEditorProps {
    name: string;
    maxLength: number;
}
