declare const arbitrumTokens: ({
    chainId: number;
    address: string;
    _scan: string;
    symbol: string;
    name: string;
    decimals: number;
    logoURI: string;
} | {
    chainId: number;
    address: string;
    decimals: number;
    name: string;
    symbol: string;
    logoURI: string;
    _scan?: undefined;
})[];
export default arbitrumTokens;
