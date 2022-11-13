import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    sizeType?: 'small' | 'medium';
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    link?: string;
}