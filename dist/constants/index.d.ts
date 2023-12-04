export declare enum ZIndex {
    UNDERLAYER = -1,
    OVERLAY = 100,
    DIALOG = 1000,
    TOOLTIP = 2000
}
export declare const NATIVE_TOKEN_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export interface TokenInfo {
    name: string;
    symbol: string;
    address: string;
    decimals: number;
    logoURI: string;
    chainId: number;
    isImport?: boolean;
}
export declare const NATIVE_TOKEN: {
    [chainId: number]: TokenInfo;
};
export declare const WRAPPED_NATIVE_TOKEN: {
    [chainId: number]: TokenInfo;
};
export declare const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare const DEFAULT_TOKENS: {
    [chainId: number]: TokenInfo[];
};
export declare const MULTICALL_ADDRESS: {
    [chainId: number]: string;
};
export declare const AGGREGATOR_PATH: {
    [chainId: number]: string;
};
export declare const SCAN_LINK: {
    [chainId: number]: string;
};
export declare const SUPPORTED_NETWORKS: string[];
