import { Trade } from '../hooks/useSwap';
interface Props {
    loading: boolean;
    onRefresh: () => void;
    trade: Trade | null;
}
declare function RefreshBtn({ trade, onRefresh, loading }: Props): JSX.Element;
export default RefreshBtn;
