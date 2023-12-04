import { Dex } from '../hooks/useSwap';
declare function Settings({ slippage, setSlippage, deadline, setDeadline, allDexes, excludedDexes, onShowSource, }: {
    slippage: number;
    setSlippage: (value: number) => void;
    deadline: number;
    setDeadline: (value: number) => void;
    allDexes: Dex[];
    excludedDexes: Dex[];
    onShowSource: () => void;
}): JSX.Element;
export default Settings;
