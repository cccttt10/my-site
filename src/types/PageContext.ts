type Pagination = {
    fields: {
        title: string;
        slug: string;
    };
};

export type PageContext = {
    next: Pagination;
    prev: Pagination;
};
