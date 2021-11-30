const DEFAULT_PAGE_SIZE = 12;

export const defaultQuery = (pageSize = DEFAULT_PAGE_SIZE) => {
    return { first: pageSize, after: undefined, last: undefined, before: undefined };
};
