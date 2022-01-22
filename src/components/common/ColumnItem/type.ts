import { ReactNode } from 'react';

export type ColumnItemProps = {
    color: string;
    children?: ReactNode;
    customFunction?: () => void;
};
