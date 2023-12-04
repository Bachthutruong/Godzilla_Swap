import { TokenInfo } from '../constants';
export declare type Route = {
    pool: string;
    tokenIn: string;
    swapAmount: string;
    tokenOut: string;
    amountOut: string;
    limitReturnAmount: string;
    exchange: string;
    poolLength: number;
    poolType: string;
    extra: string;
};
declare type ExtraFeeConfig = {
    feeAmount: string;
    feeAmountUsd: string;
    chargeFeeBy: ChargeFeeBy;
    isInBps: boolean;
    feeReceiver: string;
};
declare type DetailedRouteSummary = {
    tokenIn: string;
    amountIn: string;
    parsedAmountIn: number;
    amountInUsd: string;
    tokenOut: string;
    amountOut: string;
    parsedAmountOut: number;
    amountOutUsd: string;
    priceImpact: number;
    executionPrice: number;
    gas: string;
    gasUsd: string;
    gasPrice: string;
    fee?: {
        currency: TokenInfo;
        currencyAmount: string;
        formattedAmount: string;
        formattedAmountUsd: string;
    };
    extraFee: ExtraFeeConfig;
    route: Route[][];
    routerAddress: string;
};
declare enum ChargeFeeBy {
    CURRENCY_IN = "currency_in",
    CURRENCY_OUT = "currency_out",
    NONE = ""
}
declare type RouteSummary = {
    tokenIn: string;
    amountIn: string;
    amountInUsd: string;
    tokenOut: string;
    amountOut: string;
    amountOutUsd: string;
    tokenOutMarketPriceAvailable: null;
    gas: string;
    gasUsd: string;
    gasPrice: string;
    extraFee: {
        chargeFeeBy: ChargeFeeBy;
        feeAmount: string;
        feeReceiver: string;
        isInBps: boolean;
        feeAmountUsd: string;
    };
    route: Route[][];
};
declare type GetRouteData = {
    routeSummary: RouteSummary | null;
    routerAddress: string;
    fromMeta: boolean;
};
export interface SwapPool {
    id: string;
    exchange: string;
    swapAmount?: number;
    swapPercentage?: number;
}
declare type PathItem = TokenInfo;
declare type Swap = {
    pool: string;
    tokenIn: string;
    tokenOut: string;
    swapAmount: string;
    amountOut: string;
    exchange: string;
};
export interface SwapRouteV2 {
    swapPercentage?: number;
    path: PathItem[];
    subRoutes: SwapPool[][];
    id: string;
}
export declare const parseGetRouteResponse: (rawData: GetRouteData, currencyIn: TokenInfo, currencyOut: TokenInfo) => {
    routeSummary: DetailedRouteSummary | undefined;
    routerAddress: string;
    fromMeta: boolean;
};
export declare function getTradeComposition(chainId: number, inputToken: TokenInfo | undefined, inputAmount: string | undefined, swaps: Swap[][] | undefined, allTokensArr: TokenInfo[]): SwapRouteV2[] | undefined;
export {};
