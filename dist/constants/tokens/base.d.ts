declare const baseTokens: ({
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
    domainSeparator: string;
})[];
export default baseTokens;
