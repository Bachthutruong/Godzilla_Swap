import { Dex } from '../../hooks/useSwap';
import { SwapPool } from '../../utils/aggregationRouting';
export declare const getDexInfoByPool: (pool: SwapPool, allDexes?: Dex[]) => {
    name: string;
    logoURL: string;
} | undefined;
export declare const getSwapPercent: (percent?: number, routeNumber?: number) => string | null;
export declare const onScroll: (element: HTMLDivElement | null) => void;
export declare const useShadow: (scrollRef: React.RefObject<HTMLDivElement>, shadowRef: React.RefObject<HTMLDivElement>, contentRef: React.RefObject<HTMLDivElement>) => import("lodash").DebouncedFunc<(...args: any) => any>;
