import { Placement } from '@popperjs/core';
import { CSSProperties, ReactNode } from 'react';
export default function InfoHelper({ text, size, placement, style, color, }: {
    text: string | ReactNode;
    size?: number;
    isActive?: boolean;
    placement?: Placement;
    style?: CSSProperties;
    color?: string;
}): JSX.Element;
