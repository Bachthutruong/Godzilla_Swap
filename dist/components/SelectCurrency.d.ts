import { TokenInfo as TokenDetail } from '../constants';
export declare const Input: import("styled-components").StyledComponent<"input", any, {}, never>;
declare function SelectCurrency({ selectedToken, onChange, onImport, }: {
    selectedToken: string;
    onChange: (address: string) => void;
    onImport: (token: TokenDetail) => void;
}): JSX.Element;
export default SelectCurrency;
