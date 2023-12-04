import { providers } from 'ethers';
import { ReactNode } from 'react';
export declare const Web3Provider: ({ provider, children, }: {
    provider: providers.Web3Provider | null;
    children: ReactNode;
}) => JSX.Element;
export declare const useActiveWeb3: () => {
    provider: providers.Web3Provider | null;
    chainId: number;
    account: string;
};
