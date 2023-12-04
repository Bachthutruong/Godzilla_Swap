import { Contract, ContractInterface } from 'ethers';
export declare function useContract(address: string, ABI: ContractInterface): Contract | null;
export declare const useMulticalContract: () => Contract | null;
export declare function useWETHContract(): Contract | null;
