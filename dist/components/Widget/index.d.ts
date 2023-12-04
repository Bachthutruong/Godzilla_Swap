import { ReactNode } from 'react';
import { Theme } from '../../theme';
import { TokenInfo } from '../../constants';
export declare const DialogWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
interface FeeSetting {
    chargeFeeBy: 'currency_in' | 'currency_out';
    feeReceiver: string;
    feeAmount: number;
    isInBps: boolean;
}
export interface WidgetProps {
    client: string;
    enableRoute?: boolean;
    provider?: any;
    tokenList?: TokenInfo[];
    theme?: Theme;
    defaultTokenIn?: string;
    defaultTokenOut?: string;
    defaultSlippage?: number;
    feeSetting?: FeeSetting;
    onTxSubmit?: (txHash: string, data: any) => void;
    enableDexes?: string;
    title?: string | ReactNode;
}
export default function SwapWidget({ provider, tokenList, theme, defaultTokenIn, defaultTokenOut, defaultSlippage, feeSetting, client, onTxSubmit, enableRoute, enableDexes, title, }: WidgetProps): JSX.Element;
export {};
