export interface Trade {
    routeSummary: {
        tokenIn: string;
        amountIn: string;
        amountInUsd: string;
        tokenOut: string;
        amountOut: string;
        amountOutUsd: string;
        gas: string;
        gasPrice: string;
        gasUsd: string;
        extraFee: {
            feeAmount: string;
            chargeFeeBy: string;
            isInBps: string;
            feeReceiver: string;
        };
        route: [
            [
                {
                    pool: string;
                    tokenIn: string;
                    tokenOut: string;
                    limitReturnAmount: string;
                    swapAmount: string;
                    amountOut: string;
                    exchange: string;
                    poolLength: number;
                    poolType: string;
                    extra: string;
                }
            ]
        ];
    };
    routerAddress: string;
}
export interface Dex {
    name: string;
    logoURL: string;
    dexId: string;
}
export declare const useDexes: (enableDexes?: string) => readonly [Dex[], string | undefined, Dex[], import("react").Dispatch<import("react").SetStateAction<Dex[]>>];
declare const useSwap: ({ defaultTokenIn, defaultTokenOut, defaultSlippage, feeSetting, enableDexes, }: {
    defaultTokenIn?: string | undefined;
    defaultTokenOut?: string | undefined;
    defaultSlippage?: number | undefined;
    feeSetting?: {
        chargeFeeBy: 'currency_in' | 'currency_out';
        feeAmount: number;
        feeReceiver: string;
        isInBps: boolean;
    } | undefined;
    enableDexes?: string | undefined;
}) => {
    tokenIn: string;
    tokenOut: string;
    setTokenOut: import("react").Dispatch<import("react").SetStateAction<string>>;
    setTokenIn: import("react").Dispatch<import("react").SetStateAction<string>>;
    inputAmout: string;
    trade: Trade | null;
    setInputAmount: import("react").Dispatch<import("react").SetStateAction<string>>;
    loading: boolean;
    error: string;
    slippage: number;
    setSlippage: import("react").Dispatch<import("react").SetStateAction<number>>;
    getRate: () => Promise<void>;
    deadline: number;
    setDeadline: import("react").Dispatch<import("react").SetStateAction<number>>;
    allDexes: Dex[];
    excludedDexes: Dex[];
    setExcludedDexes: import("react").Dispatch<import("react").SetStateAction<Dex[]>>;
    setTrade: import("react").Dispatch<import("react").SetStateAction<Trade | null>>;
    isWrap: boolean;
    isUnwrap: boolean;
};
export default useSwap;
