import * as React from 'react';

type MasonryProps<T> = React.ComponentPropsWithoutRef<"div"> & {
    items: T[];
    render: (item: T, idx: number) => React.ReactNode;
    config: {
        columns: number | number[];
        gap: number | number[];
        media?: number[];
    };
};
declare function Masonry<T>({ items, render, config, ...rest }: MasonryProps<T>): React.JSX.Element | null;

export { Masonry, MasonryProps };
