declare const zkSyncTokens: ({
    chainId: number;
    address: string;
    symbol: string;
    name: string;
    decimals: number;
    marketCap: number;
    logoURI: string;
    isWhitelisted: boolean;
    isStable: boolean;
    domainSeparator: string;
} | {
    chainId: number;
    address: string;
    symbol: string;
    name: string;
    decimals: number;
    marketCap: number;
    logoURI: string;
    isWhitelisted: boolean;
    isStable: boolean;
    domainSeparator?: undefined;
})[];
export default zkSyncTokens;
