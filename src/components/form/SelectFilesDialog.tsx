import clsx from 'clsx';
import Image from 'material-ui-image';
import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Theme,
    Typography,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

interface SelectFilesDialogProps {
    multiple?: boolean;
    title?: string;
    accept?: string | string[];
    onSubmit: (files: File[]) => void;
}

interface RenderSelectedProps {
    multiple: boolean;
    files: File[];
    theme?: Theme;
}

interface DialogState {
    visible: boolean;
    loading: boolean;
    error?: string | null;
}

export interface DialogEventTypes {
    setVisible: (value: boolean) => void;
    setLoading: (value: boolean) => void;
    setError: (value: string | null) => void;
}

const PREVIEW_IMAGE_TYPES = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];
const INIT_DIALOG_STATE = { visible: false, loading: false, error: null };

const RenderSelected = ({ multiple, files, theme }: RenderSelectedProps) => {
    const imageStyles = {
        container: {
            paddingTop: 0,
            position: 'relative',
            height: 135,
        },
        image: {
            height: 135,
            width: 'auto',
            maxWidth: '100%',
            position: 'relative',
            objectFit: 'contain',
            borderWidth: 2,
            borderRadius: theme?.shape?.borderRadius,
            borderColor: theme?.palette?.grey?.['400'],
        },
    };

    if (!multiple && files[0] && PREVIEW_IMAGE_TYPES.includes(files[0].type)) {
        return (
            <Image
                src={URL.createObjectURL(files[0])}
                aspectRatio={1}
                cover={false}
                style={imageStyles.container}
                imageStyle={imageStyles.image}
            />
        );
    }
    return (
        <ul>
            {files.map((file: File, index) => (
                <li key={`selected_${index}_${file.name}`}>{file.name}</li>
            ))}
        </ul>
    );
};

function SelectFilesDialog(props: SelectFilesDialogProps, ref: Ref<unknown> | undefined) {
    const { onSubmit, accept, multiple = false, title = 'Select file' } = props;

    const classes = useStyles();
    const theme = useTheme();

    const [files, setFiles] = useState<File[]>([]);
    const [dialogState, setDialogState] = useState<DialogState>(INIT_DIALOG_STATE);

    const FILES_SELECTED = files.length !== 0;

    const { getRootProps, getInputProps } = useDropzone({
        accept,
        multiple,
        onDrop: selected => setFiles(selected),
    });

    const updateState = (key: string, value: boolean | string | null) =>
        setDialogState(currentState => ({ ...currentState, [key]: value }));

    const dialogEvents: DialogEventTypes = {
        setVisible: value => updateState('visible', value),
        setLoading: value => updateState('loading', value),
        setError: value => updateState('error', value),
    };

    useImperativeHandle(ref, () => dialogEvents);

    const cleanup = () => {
        setFiles([]);
        setDialogState(INIT_DIALOG_STATE);
    };

    const onCancel = () => dialogEvents.setVisible(false);

    const handleSubmit = () => {
        if (!files.length) {
            return dialogEvents.setError('Please select a file');
        }
        return onSubmit(files);
    };

    const { loading, error } = dialogState;

    const dropZoneClassname = clsx(classes.dropZone, {
        [classes.dropZoneSelected]: FILES_SELECTED,
        [classes.dropZoneDisabled]: loading,
    });

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={dialogState.visible}
            onExited={cleanup}
            onClose={onCancel}
            aria-labelledby="file-upload-dialog-title"
        >
            <DialogTitle id="file-upload-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <Box marginBottom={2} marginRight={2} {...getRootProps({ className: dropZoneClassname })}>
                    {FILES_SELECTED ? (
                        <RenderSelected multiple={multiple} files={files} theme={theme} />
                    ) : (
                        <Typography variant="body1" className={classes.placeHolder}>
                            Drag and drop an file here or click
                        </Typography>
                    )}
                    <input {...getInputProps()} disabled={loading} />
                </Box>
            </DialogContent>
            <Box marginBottom={2} marginRight={2}>
                <DialogActions>
                    <Box flex="1" marginLeft={2}>
                        {error && (
                            <Typography variant="body1" color="error">
                                {error}
                            </Typography>
                        )}
                    </Box>
                    <Button disabled={loading} variant="outlined" onClick={onCancel} color="secondary">
                        Cancel
                    </Button>
                    <div className={classes.submitButtonWrap}>
                        <Button disabled={loading} onClick={handleSubmit} color="secondary" variant="contained">
                            Upload
                        </Button>
                        {loading && <CircularProgress size={20} className={classes.submitButtonSpinner} />}
                    </div>
                </DialogActions>
            </Box>
        </Dialog>
    );
}

const useStyles = makeStyles(theme => ({
    dropZone: {
        cursor: 'pointer',
        position: 'relative',
        width: '100%',
        height: 135,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderStyle: 'dashed',
        borderWidth: 2,
        borderRadius: theme.shape.borderRadius,
        borderColor: theme.palette.grey['400'],
        outline: 'none',
        transition: 'background-color 222ms ease-in-out',
        '&:hover': {
            backgroundColor: theme.palette.grey['100'],
        },
    },
    dropZoneDisabled: {
        pointerEvents: 'none',
    },
    dropZoneSelected: {
        pointerEvents: 'none',
        border: 'none',
    },
    placeHolder: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.grey['400'],
    },
    submitButtonWrap: {
        position: 'relative',
    },
    submitButtonSpinner: {
        color: theme.palette.secondary.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -10,
        marginLeft: -10,
    },
}));

export default forwardRef(SelectFilesDialog);
