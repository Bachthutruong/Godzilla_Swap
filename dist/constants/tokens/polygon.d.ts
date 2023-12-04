declare const polygonTokens: ({
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
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
    _scan?: undefined;
})[];
export default polygonTokens;
