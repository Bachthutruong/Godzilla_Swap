import { BigNumber } from 'ethers';
declare const useTokenBalances: (tokenAddresses: string[]) => {
    loading: boolean;
    balances: {
        [address: string]: BigNumber;
    };
    refetch: () => Promise<void>;
};
export default useTokenBalances;
