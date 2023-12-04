import { ReactNode } from 'react';
import { TokenInfo } from '../constants';
export declare const TokenListProvider: ({ tokenList, children }: {
    tokenList?: TokenInfo[] | undefined;
    children: ReactNode;
}) => JSX.Element;
export declare const useTokens: () => TokenInfo[];
export declare const useImportedTokens: () => {
    addToken: (token: TokenInfo) => void;
    removeToken: (token: TokenInfo) => void;
    importedTokens: TokenInfo[];
};
