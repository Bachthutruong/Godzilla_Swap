declare const fantomTokens: ({
    name: string;
    symbol: string;
    address: string;
    _scan: string;
    chainId: number;
    decimals: number;
    logoURI: string;
    bridgeId?: undefined;
    nativeChain?: undefined;
} | {
    name: string;
    symbol: string;
    address: string;
    _scan: string;
    chainId: number;
    decimals: number;
    logoURI: string;
    bridgeId: string;
    nativeChain: number;
} | {
    name: string;
    symbol: string;
    address: string;
    _scan: string;
    chainId: number;
    decimals: number;
    logoURI: string;
    bridgeId: string;
    nativeChain?: undefined;
})[];
export default fantomTokens;
