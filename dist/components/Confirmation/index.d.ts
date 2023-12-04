import { Trade } from '../../hooks/useSwap';
import { TokenInfo } from '../../constants';
declare function Confirmation({ trade, tokenInInfo, amountIn, tokenOutInfo, amountOut, rate, slippage, priceImpact, onClose, deadline, client, onTxSubmit, }: {
    trade: Trade;
    tokenInInfo: TokenInfo;
    amountIn: string;
    tokenOutInfo: TokenInfo;
    amountOut: string;
    rate: number;
    slippage: number;
    priceImpact: number;
    onClose: () => void;
    deadline: number;
    client: string;
    onTxSubmit?: (txHash: string, data: any) => void;
}): JSX.Element;
export default Confirmation;
