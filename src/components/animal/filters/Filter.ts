export default interface Filter {
    name: string;
    value?: string;
    displayValue?: string;
    options: FilterOption[];
}

export interface FilterOption {
    value: string;
    title: string;
}
