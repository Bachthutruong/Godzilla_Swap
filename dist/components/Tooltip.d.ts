import { ReactNode } from 'react';
import { PopoverProps } from './Popover';
interface TooltipProps extends Omit<PopoverProps, 'content'> {
    text: string | ReactNode;
    width?: string;
    size?: number;
}
export default function Tooltip({ text, width, size, ...rest }: TooltipProps): JSX.Element;
export {};
