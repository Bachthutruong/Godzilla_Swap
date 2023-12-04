import React from 'react';
import { TokenInfo } from '../../constants';
import { Trade } from '../../hooks/useSwap';
interface RoutingProps {
    trade: Trade | null;
    currencyIn: TokenInfo | undefined;
    currencyOut: TokenInfo | undefined;
}
declare const _default: React.MemoExoticComponent<({ trade, currencyIn, currencyOut }: RoutingProps) => JSX.Element>;
export default _default;
