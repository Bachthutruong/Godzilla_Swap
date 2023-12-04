declare const auroraTokens: ({
    chainId: number;
    address: string;
    _scan: string;
    symbol: string;
    name: string;
    decimals: number;
    logoURI: string;
    tags?: undefined;
} | {
    chainId: number;
    address: string;
    _scan: string;
    symbol: string;
    name: string;
    decimals: number;
    logoURI: string;
    tags: string[];
})[];
export default auroraTokens;
