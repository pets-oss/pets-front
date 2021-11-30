import { DocumentNode } from 'graphql';
import React from 'react';

import { useQuery } from '@apollo/client';
import Selector, { DynamicSelectorOption, SelectorProps } from './Selector';

export default function DynamicSelector({
    gqlOptions,
    name,
    defaultValue,
    multiple,
    disabled,
    helperText,
    required,
    label,
}: DynamicSelectorProps) {
    const { data } = useQuery<GqlResponse>(gqlOptions.query, {
        variables: gqlOptions.variables,
        skip: disabled,
    });

    return (
        <Selector
            options={data ? data[gqlOptions.type] : []}
            name={name}
            helperText={helperText}
            defaultValue={defaultValue}
            multiple={multiple}
            disabled={disabled}
            required={required}
            label={label}
        />
    );
}

export interface DynamicSelectorProps extends SelectorProps {
    gqlOptions: { query: DocumentNode; variables?: Record<string, any>; type: string };
}

interface GqlResponse {
    options: DynamicSelectorOption[];
}
