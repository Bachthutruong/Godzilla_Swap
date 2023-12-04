import { Dex } from '../hooks/useSwap';
export declare const Checkbox: import("styled-components").StyledComponent<"input", any, {}, never>;
declare function DexesSetting({ allDexes, excludedDexes, setExcludedDexes, }: {
    allDexes: Dex[];
    excludedDexes: Dex[];
    setExcludedDexes: (v: Dex[]) => void;
}): JSX.Element;
export default DexesSetting;
