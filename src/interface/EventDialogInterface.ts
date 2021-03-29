export interface EventDialogProps {
    open: boolean;
    onClose: () => void;
    onCreate: any;
    categoryOptions: string[];
    typeOptions: string[];
}
